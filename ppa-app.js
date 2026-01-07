// PPA Application - Main JavaScript
const PIN_CODE = '0119';
let currentFilter = 'all';
let currentTab = 'dashboard';
let substances = [];
let inventory = [];
let transactions = [];
let groupBuys = [];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupPinScreen();
    setupEventListeners();
    setupAutoCalculations();
});

// PIN Screen
function setupPinScreen() {
    const pinInput = document.getElementById('pinInput');
    
    pinInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPin();
        }
    });
    
    // Auto-submit after 4 digits
    pinInput.addEventListener('input', function() {
        if (this.value.length === 4) {
            setTimeout(checkPin, 100);
        }
    });
}

function checkPin() {
    const pinInput = document.getElementById('pinInput');
    const pinError = document.getElementById('pinError');
    
    if (pinInput.value === PIN_CODE) {
        document.getElementById('pinScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        initializeApp();
    } else {
        pinError.style.display = 'block';
        pinInput.value = '';
        pinInput.style.borderColor = '#e74c3c';
        
        setTimeout(() => {
            pinError.style.display = 'none';
            pinInput.style.borderColor = '#ddd';
        }, 2000);
    }
}

function lockApp() {
    document.getElementById('pinScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('pinInput').value = '';
    document.getElementById('pinInput').focus();
}

// Initialize App
function initializeApp() {
    renderDashboard();
    renderDatabase();
    renderInventory();
    renderTransactions();
    renderGroupBuys();
}

// Tab Switching
function switchTab(tabName) {
    currentTab = tabName;
    
    // Update nav buttons
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    
    // Render content if needed
    if (tabName === 'dashboard') renderDashboard();
    if (tabName === 'database') renderDatabase();
    if (tabName === 'inventory') renderInventory();
    if (tabName === 'transactions') renderTransactions();
    if (tabName === 'groupbuys') renderGroupBuys();
}

// Dashboard
function renderDashboard() {
    // Update stats
    document.getElementById('totalItems').textContent = substances.length;
    
    const totalValue = inventory.reduce((sum, item) => {
        const quantity = item.quantity || 0;
        const price = item.pricePaid || 0;
        return sum + (quantity > 0 ? price : 0);
    }, 0);
    document.getElementById('inventoryValue').textContent = '$' + totalValue.toFixed(2);
    
    const activeItems = inventory.filter(item => item.quantity > 0).length;
    document.getElementById('activeItems').textContent = activeItems;
    
    // Calculate this month's transactions
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthTransactions = transactions.filter(t => new Date(t.dateReceived) >= firstDayOfMonth);
    document.getElementById('totalTransactions').textContent = monthTransactions.length;
    
    // Recent activity
    const recentDiv = document.getElementById('recentActivity');
    if (transactions.length === 0) {
        recentDiv.innerHTML = '<div class="empty-state"><h3>No recent activity</h3><p>Add items to inventory to see activity here</p></div>';
    } else {
        const recent = [...transactions].sort((a, b) => new Date(b.dateReceived) - new Date(a.dateReceived)).slice(0, 5);
        recentDiv.innerHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${recent.map(t => `
                        <tr>
                            <td>${formatDate(t.dateReceived)}</td>
                            <td>${getSubstanceName(t.substanceId)}</td>
                            <td>${t.quantity} vials (${t.totalMg}mg)</td>
                            <td>$${t.pricePaid.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Database
function renderDatabase() {
    const grid = document.getElementById('substanceGrid');
    
    let filtered = substances;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = substances.filter(s => s.category === currentFilter);
    }
    
    // Apply search filter
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(searchTerm) ||
            (s.notes && s.notes.toLowerCase().includes(searchTerm))
        );
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state"><h3>No substances found</h3><p>Try adjusting your search or filter</p></div>';
        return;
    }
    
    grid.innerHTML = filtered.map(substance => `
        <div class="substance-card" onclick="openAddInventoryModal('${substance.id}')">
            <span class="category">${formatCategory(substance.category)}</span>
            <h4>${substance.name}</h4>
            <div class="info">
                ${substance.commonDosage ? `<div><strong>Dosage:</strong> ${substance.commonDosage}</div>` : ''}
                ${substance.notes ? `<div style="margin-top: 5px; color: #999;">${substance.notes}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function filterByCategory(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderDatabase();
}

function filterSubstances() {
    renderDatabase();
}

// Inventory
function renderInventory() {
    const content = document.getElementById('inventoryContent');
    
    if (inventory.length === 0) {
        content.innerHTML = '<div class="empty-state"><h3>No inventory yet</h3><p>Click on substances in the Database tab to add them to inventory</p></div>';
        return;
    }
    
    // Group by substance
    const grouped = {};
    inventory.forEach(item => {
        if (!grouped[item.substanceId]) {
            grouped[item.substanceId] = {
                substanceId: item.substanceId,
                totalVials: 0,
                totalMg: 0,
                totalValue: 0,
                entries: []
            };
        }
        grouped[item.substanceId].totalVials += item.quantity || 0;
        grouped[item.substanceId].totalMg += parseFloat(item.totalMg) || 0;
        grouped[item.substanceId].totalValue += item.pricePaid || 0;
        grouped[item.substanceId].entries.push(item);
    });
    
    content.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Substance</th>
                    <th>Total Vials</th>
                    <th>Total mg</th>
                    <th>Total Value</th>
                    <th>Avg Cost/mg</th>
                </tr>
            </thead>
            <tbody>
                ${Object.values(grouped).map(item => {
                    const avgCost = item.totalMg > 0 ? (item.totalValue / item.totalMg) : 0;
                    return `
                        <tr style="cursor: pointer;" onclick="showInventoryDetails('${item.substanceId}')">
                            <td><strong>${getSubstanceName(item.substanceId)}</strong></td>
                            <td>${item.totalVials}</td>
                            <td>${item.totalMg.toFixed(1)} mg</td>
                            <td>$${item.totalValue.toFixed(2)}</td>
                            <td>$${avgCost.toFixed(3)}/mg</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
}

function showInventoryDetails(substanceId) {
    const items = inventory.filter(i => i.substanceId === substanceId);
    const substance = getSubstanceName(substanceId);
    
    alert(`Inventory Details for ${substance}\n\n` + 
          items.map((item, idx) => 
              `Entry ${idx + 1}:\n` +
              `  Date: ${formatDate(item.dateReceived)}\n` +
              `  Quantity: ${item.quantity} vials (${item.vialSize}mg each)\n` +
              `  Vendor: ${item.vendor}\n` +
              `  Price: $${item.pricePaid.toFixed(2)}\n` +
              `  ${item.lotNumber ? 'Lot: ' + item.lotNumber : ''}`
          ).join('\n\n'));
}

// Transactions
function renderTransactions() {
    const content = document.getElementById('transactionsContent');
    
    if (transactions.length === 0) {
        content.innerHTML = '<div class="empty-state"><h3>No transactions yet</h3><p>Transactions will appear here when you add items to inventory</p></div>';
        return;
    }
    
    const sorted = [...transactions].sort((a, b) => new Date(b.dateReceived) - new Date(a.dateReceived));
    
    content.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Substance</th>
                    <th>Quantity</th>
                    <th>Vendor</th>
                    <th>Price</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                ${sorted.map(t => `
                    <tr>
                        <td>${formatDate(t.dateReceived)}</td>
                        <td><span style="padding: 4px 8px; background: ${getTypeColor(t.transactionType)}; color: white; border-radius: 4px; font-size: 12px;">${formatType(t.transactionType)}</span></td>
                        <td>${getSubstanceName(t.substanceId)}</td>
                        <td>${t.quantity} × ${t.vialSize}mg</td>
                        <td>${t.vendor}</td>
                        <td>$${t.pricePaid.toFixed(2)}</td>
                        <td>${t.notes || (t.lotNumber ? 'Lot: ' + t.lotNumber : '-')}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Group Buys
function renderGroupBuys() {
    const content = document.getElementById('groupbuysContent');
    
    if (groupBuys.length === 0) {
        content.innerHTML = '<div class="empty-state"><h3>No group buys yet</h3><p>Click "New Group Buy" to track group purchases</p></div>';
        return;
    }
    
    const sorted = [...groupBuys].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    
    content.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Organizer</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                ${sorted.map(gb => `
                    <tr>
                        <td><strong>${gb.name}</strong></td>
                        <td>${gb.organizer}</td>
                        <td>$${gb.amount.toFixed(2)}</td>
                        <td>${gb.date ? formatDate(gb.date) : '-'}</td>
                        <td>${gb.paymentMethod || '-'}</td>
                        <td><span style="padding: 4px 8px; background: ${getStatusColor(gb.status)}; color: white; border-radius: 4px; font-size: 12px;">${formatStatus(gb.status)}</span></td>
                        <td>${gb.notes || '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Modals
function openAddSubstanceModal() {
    document.getElementById('addSubstanceModal').style.display = 'block';
    document.getElementById('substanceName').focus();
}

function openAddInventoryModal(substanceId) {
    const substance = substances.find(s => s.id === substanceId);
    if (!substance) return;
    
    document.getElementById('addInventoryModal').style.display = 'block';
    document.getElementById('invSubstanceId').value = substanceId;
    document.getElementById('selectedSubstanceName').textContent = substance.name;
    
    // Set today's date
    document.getElementById('dateReceived').valueAsDate = new Date();
}

function openAddGroupBuyModal() {
    document.getElementById('addGroupBuyModal').style.display = 'block';
    document.getElementById('gbName').focus();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    
    // Reset forms
    if (modalId === 'addSubstanceModal') {
        document.getElementById('addSubstanceForm').reset();
    } else if (modalId === 'addInventoryModal') {
        document.getElementById('addInventoryForm').reset();
    } else if (modalId === 'addGroupBuyModal') {
        document.getElementById('addGroupBuyForm').reset();
    }
}

function toggleGroupBuyFields() {
    const type = document.getElementById('transactionType').value;
    const fields = document.getElementById('groupBuyFields');
    fields.style.display = type === 'groupbuy' ? 'block' : 'none';
}

// Event Listeners
function setupEventListeners() {
    // Add Substance Form
    document.getElementById('addSubstanceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newSubstance = {
            id: 'custom_' + Date.now(),
            name: document.getElementById('substanceName').value,
            category: document.getElementById('substanceCategory').value,
            commonDosage: document.getElementById('substanceDosage').value,
            notes: document.getElementById('substanceNotes').value
        };
        
        substances.push(newSubstance);
        saveData();
        closeModal('addSubstanceModal');
        renderDatabase();
        
        alert('Substance added successfully!');
    });
    
    // Add Inventory Form
    document.getElementById('addInventoryForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newTransaction = {
            id: 'trans_' + Date.now(),
            substanceId: document.getElementById('invSubstanceId').value,
            transactionType: document.getElementById('transactionType').value,
            dateReceived: document.getElementById('dateReceived').value,
            quantity: parseInt(document.getElementById('quantity').value),
            vialSize: parseFloat(document.getElementById('vialSize').value),
            totalMg: parseFloat(document.getElementById('totalMg').value),
            pricePaid: parseFloat(document.getElementById('pricePaid').value),
            vendor: document.getElementById('vendor').value,
            lotNumber: document.getElementById('lotNumber').value,
            notes: document.getElementById('invNotes').value
        };
        
        // Group buy details if applicable
        if (newTransaction.transactionType === 'groupbuy') {
            newTransaction.groupBuy = {
                organizer: document.getElementById('gbOrganizer').value,
                amount: parseFloat(document.getElementById('gbAmount').value) || 0,
                paymentDate: document.getElementById('gbPaymentDate').value,
                paymentMethod: document.getElementById('gbPaymentMethod').value
            };
        }
        
        // Add to inventory
        const invItem = {
            id: newTransaction.id,
            substanceId: newTransaction.substanceId,
            quantity: newTransaction.quantity,
            vialSize: newTransaction.vialSize,
            totalMg: newTransaction.totalMg,
            pricePaid: newTransaction.pricePaid,
            vendor: newTransaction.vendor,
            dateReceived: newTransaction.dateReceived,
            lotNumber: newTransaction.lotNumber
        };
        
        inventory.push(invItem);
        transactions.push(newTransaction);
        
        saveData();
        closeModal('addInventoryModal');
        renderDashboard();
        renderInventory();
        renderTransactions();
        
        alert('Added to inventory successfully!');
    });
    
    // Add Group Buy Form
    document.getElementById('addGroupBuyForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newGroupBuy = {
            id: 'gb_' + Date.now(),
            name: document.getElementById('gbName').value,
            organizer: document.getElementById('gbOrganizerStandalone').value,
            amount: parseFloat(document.getElementById('gbTotalAmount').value),
            date: document.getElementById('gbDate').value,
            paymentMethod: document.getElementById('gbMethod').value,
            status: document.getElementById('gbStatus').value,
            notes: document.getElementById('gbNotes').value
        };
        
        groupBuys.push(newGroupBuy);
        saveData();
        closeModal('addGroupBuyModal');
        renderGroupBuys();
        
        alert('Group buy created successfully!');
    });
    
    // Close modals on outside click
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Auto-calculate total mg
function setupAutoCalculations() {
    const quantityInput = document.getElementById('quantity');
    const vialSizeInput = document.getElementById('vialSize');
    const totalMgInput = document.getElementById('totalMg');
    
    function calculateTotal() {
        const quantity = parseFloat(quantityInput.value) || 0;
        const vialSize = parseFloat(vialSizeInput.value) || 0;
        totalMgInput.value = (quantity * vialSize).toFixed(1) + ' mg';
    }
    
    quantityInput.addEventListener('input', calculateTotal);
    vialSizeInput.addEventListener('input', calculateTotal);
}

// Export Functions
function exportToCSV() {
    // Create CSV content
    let csv = 'PPA Export - ' + new Date().toLocaleDateString() + '\n\n';
    
    // Inventory
    csv += 'INVENTORY\n';
    csv += 'Substance,Total Vials,Total mg,Total Value\n';
    const grouped = {};
    inventory.forEach(item => {
        if (!grouped[item.substanceId]) {
            grouped[item.substanceId] = { vials: 0, mg: 0, value: 0 };
        }
        grouped[item.substanceId].vials += item.quantity || 0;
        grouped[item.substanceId].mg += parseFloat(item.totalMg) || 0;
        grouped[item.substanceId].value += item.pricePaid || 0;
    });
    
    Object.keys(grouped).forEach(substanceId => {
        const item = grouped[substanceId];
        csv += `"${getSubstanceName(substanceId)}",${item.vials},${item.mg.toFixed(1)},${item.value.toFixed(2)}\n`;
    });
    
    // Transactions
    csv += '\nTRANSACTIONS\n';
    csv += 'Date,Type,Substance,Quantity,Vial Size,Vendor,Price,Lot Number,Notes\n';
    transactions.forEach(t => {
        csv += `${t.dateReceived},"${formatType(t.transactionType)}","${getSubstanceName(t.substanceId)}",${t.quantity},${t.vialSize},"${t.vendor}",${t.pricePaid},"${t.lotNumber || ''}","${t.notes || ''}"\n`;
    });
    
    // Group Buys
    csv += '\nGROUP BUYS\n';
    csv += 'Name,Organizer,Amount,Date,Method,Status,Notes\n';
    groupBuys.forEach(gb => {
        csv += `"${gb.name}","${gb.organizer}",${gb.amount},"${gb.date || ''}","${gb.paymentMethod || ''}","${formatStatus(gb.status)}","${gb.notes || ''}"\n`;
    });
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PPA_Export_' + Date.now() + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

function exportToGoogleSheets() {
    alert('Google Sheets Export\n\n' +
          'To export to Google Sheets:\n' +
          '1. Export to CSV first\n' +
          '2. Open Google Sheets\n' +
          '3. File > Import > Upload\n' +
          '4. Select your CSV file\n\n' +
          'Direct API integration coming in future update!');
}

function importFromGoogleSheets() {
    alert('Google Sheets Import\n\n' +
          'To import from Google Sheets:\n' +
          '1. Download your sheet as CSV\n' +
          '2. Format columns to match PPA format\n' +
          '3. Use browser file import (coming soon)\n\n' +
          'Direct API integration coming in future update!');
}

// Utility Functions
function formatCategory(category) {
    const map = {
        'peptide': 'Peptide',
        'bioregulator': 'Bioregulator',
        'aas': 'AAS',
        'custom': 'Custom'
    };
    return map[category] || category;
}

function formatType(type) {
    const map = {
        'purchase': 'Purchase',
        'groupbuy': 'Group Buy',
        'gift': 'Gift/Sample'
    };
    return map[type] || type;
}

function formatStatus(status) {
    const map = {
        'pending': 'Pending',
        'paid': 'Paid',
        'received': 'Received',
        'cancelled': 'Cancelled'
    };
    return map[status] || status;
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getSubstanceName(substanceId) {
    const substance = substances.find(s => s.id === substanceId);
    return substance ? substance.name : 'Unknown';
}

function getTypeColor(type) {
    const colors = {
        'purchase': '#667eea',
        'groupbuy': '#764ba2',
        'gift': '#48bb78'
    };
    return colors[type] || '#999';
}

function getStatusColor(status) {
    const colors = {
        'pending': '#f39c12',
        'paid': '#3498db',
        'received': '#27ae60',
        'cancelled': '#e74c3c'
    };
    return colors[status] || '#999';
}

// Data Management
function loadData() {
    // Load from localStorage
    const savedSubstances = localStorage.getItem('ppa_substances');
    const savedInventory = localStorage.getItem('ppa_inventory');
    const savedTransactions = localStorage.getItem('ppa_transactions');
    const savedGroupBuys = localStorage.getItem('ppa_groupbuys');
    
    // Initialize with default database
    if (savedSubstances) {
        substances = JSON.parse(savedSubstances);
    } else {
        // Combine peptides and steroids from database
        substances = [...DATABASE.peptides, ...DATABASE.steroids];
        saveData();
    }
    
    if (savedInventory) inventory = JSON.parse(savedInventory);
    if (savedTransactions) transactions = JSON.parse(savedTransactions);
    if (savedGroupBuys) groupBuys = JSON.parse(savedGroupBuys);
}

function saveData() {
    localStorage.setItem('ppa_substances', JSON.stringify(substances));
    localStorage.setItem('ppa_inventory', JSON.stringify(inventory));
    localStorage.setItem('ppa_transactions', JSON.stringify(transactions));
    localStorage.setItem('ppa_groupbuys', JSON.stringify(groupBuys));
}

// Make functions global
window.switchTab = switchTab;
window.lockApp = lockApp;
window.filterByCategory = filterByCategory;
window.filterSubstances = filterSubstances;
window.openAddSubstanceModal = openAddSubstanceModal;
window.openAddInventoryModal = openAddInventoryModal;
window.openAddGroupBuyModal = openAddGroupBuyModal;
window.closeModal = closeModal;
window.toggleGroupBuyFields = toggleGroupBuyFields;
window.showInventoryDetails = showInventoryDetails;
window.exportToCSV = exportToCSV;
window.exportToGoogleSheets = exportToGoogleSheets;
window.importFromGoogleSheets = importFromGoogleSheets;
