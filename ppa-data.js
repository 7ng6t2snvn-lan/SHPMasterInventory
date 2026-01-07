// PPA Database - Comprehensive Substance Database
const DATABASE = {
    peptides: [
        {
            id: 'pep001',
            name: 'BPC-157',
            category: 'peptide',
            commonDosage: '200-500 mcg/day',
            notes: 'Healing peptide, gastric protective'
        },
        {
            id: 'pep002',
            name: 'TB-500 (Thymosin Beta-4)',
            category: 'peptide',
            commonDosage: '2-5 mg/week',
            notes: 'Tissue repair and regeneration'
        },
        {
            id: 'pep003',
            name: 'Tesamorelin',
            category: 'peptide',
            commonDosage: '1-2 mg/day',
            notes: 'GHRH analog, reduces visceral fat'
        },
        {
            id: 'pep004',
            name: 'Ipamorelin',
            category: 'peptide',
            commonDosage: '200-300 mcg 2-3x/day',
            notes: 'GH secretagogue, GHRP'
        },
        {
            id: 'pep005',
            name: 'CJC-1295 (without DAC)',
            category: 'peptide',
            commonDosage: '100 mcg 2-3x/day',
            notes: 'GHRH analog'
        },
        {
            id: 'pep006',
            name: 'CJC-1295 (with DAC)',
            category: 'peptide',
            commonDosage: '2 mg/week',
            notes: 'Long-acting GHRH analog'
        },
        {
            id: 'pep007',
            name: 'Sermorelin',
            category: 'peptide',
            commonDosage: '200-500 mcg/day',
            notes: 'GHRH 1-29, GH secretagogue'
        },
        {
            id: 'pep008',
            name: 'GHRP-2',
            category: 'peptide',
            commonDosage: '100-300 mcg 2-3x/day',
            notes: 'Growth hormone releasing peptide'
        },
        {
            id: 'pep009',
            name: 'GHRP-6',
            category: 'peptide',
            commonDosage: '100-200 mcg 2-3x/day',
            notes: 'GH secretagogue, increases appetite'
        },
        {
            id: 'pep010',
            name: 'Hexarelin',
            category: 'peptide',
            commonDosage: '100 mcg 2-3x/day',
            notes: 'Potent GH secretagogue'
        },
        {
            id: 'pep011',
            name: 'IGF-1 LR3',
            category: 'peptide',
            commonDosage: '20-100 mcg/day',
            notes: 'Long-acting insulin-like growth factor'
        },
        {
            id: 'pep012',
            name: 'IGF-1 DES',
            category: 'peptide',
            commonDosage: '50-150 mcg/day',
            notes: 'Short-acting, localized IGF-1'
        },
        {
            id: 'pep013',
            name: 'HGH (Somatropin)',
            category: 'peptide',
            commonDosage: '2-4 IU/day',
            notes: 'Recombinant human growth hormone'
        },
        {
            id: 'pep014',
            name: 'Melanotan II',
            category: 'peptide',
            commonDosage: '0.5-1 mg 2-3x/week',
            notes: 'Tanning peptide, melanocortin receptor agonist'
        },
        {
            id: 'pep015',
            name: 'PT-141 (Bremelanotide)',
            category: 'peptide',
            commonDosage: '1-2 mg as needed',
            notes: 'Sexual dysfunction treatment'
        },
        {
            id: 'pep016',
            name: 'Selank',
            category: 'peptide',
            commonDosage: '250-500 mcg 2x/day',
            notes: 'Anxiolytic, nootropic peptide'
        },
        {
            id: 'pep017',
            name: 'Semax',
            category: 'peptide',
            commonDosage: '200-400 mcg 2x/day',
            notes: 'Cognitive enhancement, neuroprotective'
        },
        {
            id: 'pep018',
            name: 'Epithalon (Epitalon)',
            category: 'peptide',
            commonDosage: '5-10 mg/cycle',
            notes: 'Telomerase activator, anti-aging'
        },
        {
            id: 'pep019',
            name: 'Thymalin',
            category: 'peptide',
            commonDosage: '10 mg/day for 10 days',
            notes: 'Thymus extract, immune modulation'
        },
        {
            id: 'pep020',
            name: 'Thymulin',
            category: 'peptide',
            commonDosage: '1-2 mg/week',
            notes: 'Immune system support'
        },
        {
            id: 'pep021',
            name: 'GHK-Cu',
            category: 'peptide',
            commonDosage: '1-2 mg 2-3x/week',
            notes: 'Copper peptide, wound healing, anti-aging'
        },
        {
            id: 'pep022',
            name: 'Cerebrolysin',
            category: 'peptide',
            commonDosage: '5-10 ml/day',
            notes: 'Neurotrophic peptide complex'
        },
        {
            id: 'pep023',
            name: 'P21',
            category: 'peptide',
            commonDosage: '1-3 mg/week',
            notes: 'Cognitive enhancement, neurogenesis'
        },
        {
            id: 'pep024',
            name: 'Dihexa',
            category: 'peptide',
            commonDosage: '1-5 mg/day',
            notes: 'Cognitive enhancement, synapse formation'
        },
        {
            id: 'pep025',
            name: 'NA-Selank',
            category: 'peptide',
            commonDosage: '500-1000 mcg 2x/day',
            notes: 'N-acetyl Selank, enhanced stability'
        },
        {
            id: 'pep026',
            name: 'NA-Semax',
            category: 'peptide',
            commonDosage: '400-800 mcg 2x/day',
            notes: 'N-acetyl Semax, enhanced stability'
        },
        {
            id: 'pep027',
            name: 'Semax Amidate',
            category: 'peptide',
            commonDosage: '300-600 mcg 2x/day',
            notes: 'Longer-acting Semax variant'
        },
        {
            id: 'pep028',
            name: 'AOD-9604',
            category: 'peptide',
            commonDosage: '300 mcg/day',
            notes: 'Fat loss peptide, HGH fragment'
        },
        {
            id: 'pep029',
            name: 'HGH Fragment 176-191',
            category: 'peptide',
            commonDosage: '250-500 mcg 2x/day',
            notes: 'Fat loss, no effect on blood sugar'
        },
        {
            id: 'pep030',
            name: 'MOTS-c',
            category: 'peptide',
            commonDosage: '5-10 mg 2-3x/week',
            notes: 'Mitochondrial peptide, metabolic regulation'
        },
        {
            id: 'pep031',
            name: 'Humanin',
            category: 'peptide',
            commonDosage: '2-4 mg 3x/week',
            notes: 'Mitochondrial peptide, neuroprotective'
        },
        {
            id: 'pep032',
            name: 'SS-31 (Elamipretide)',
            category: 'peptide',
            commonDosage: '5-40 mg/day',
            notes: 'Mitochondrial health, cardioprotective'
        },
        {
            id: 'pep033',
            name: 'Kisspeptin-10',
            category: 'peptide',
            commonDosage: '1-10 mcg/kg',
            notes: 'Reproductive hormone regulation'
        },
        {
            id: 'pep034',
            name: 'Gonadorelin',
            category: 'peptide',
            commonDosage: '100 mcg 2-3x/week',
            notes: 'GnRH, LH/FSH secretion'
        },
        {
            id: 'pep035',
            name: 'Triptorelin',
            category: 'peptide',
            commonDosage: '100 mcg/week',
            notes: 'GnRH agonist, hormone regulation'
        },
        {
            id: 'pep036',
            name: 'HCG (Human Chorionic Gonadotropin)',
            category: 'peptide',
            commonDosage: '250-500 IU 2-3x/week',
            notes: 'LH analog, testicular function'
        },
        {
            id: 'pep037',
            name: 'HMG (Human Menopausal Gonadotropin)',
            category: 'peptide',
            commonDosage: '75-150 IU 2-3x/week',
            notes: 'FSH/LH activity, fertility'
        },
        {
            id: 'pep038',
            name: 'Follistatin 344',
            category: 'peptide',
            commonDosage: '100 mcg/day',
            notes: 'Myostatin inhibitor, muscle growth'
        },
        {
            id: 'pep039',
            name: 'ACE-031',
            category: 'peptide',
            commonDosage: '1-3 mg/week',
            notes: 'Myostatin inhibitor'
        },
        {
            id: 'pep040',
            name: 'YK-11',
            category: 'peptide',
            commonDosage: '5-10 mg/day',
            notes: 'Myostatin inhibitor, SARM-like'
        },
        {
            id: 'pep041',
            name: 'Adipotide',
            category: 'peptide',
            commonDosage: '1 mg/day',
            notes: 'Targeted fat loss peptide'
        },
        {
            id: 'pep042',
            name: '5-Amino-1MQ',
            category: 'peptide',
            commonDosage: '50 mg/day',
            notes: 'NNMT inhibitor, fat loss'
        },
        {
            id: 'pep043',
            name: 'Tesofensine',
            category: 'peptide',
            commonDosage: '0.25-0.5 mg/day',
            notes: 'Weight loss, appetite suppression'
        },
        {
            id: 'pep044',
            name: 'Semaglutide',
            category: 'peptide',
            commonDosage: '0.25-2.4 mg/week',
            notes: 'GLP-1 agonist, weight loss'
        },
        {
            id: 'pep045',
            name: 'Tirzepatide',
            category: 'peptide',
            commonDosage: '2.5-15 mg/week',
            notes: 'GLP-1/GIP agonist, weight loss'
        },
        {
            id: 'pep046',
            name: 'Liraglutide',
            category: 'peptide',
            commonDosage: '0.6-3 mg/day',
            notes: 'GLP-1 agonist, diabetes/weight loss'
        },
        {
            id: 'pep047',
            name: 'Dulaglutide',
            category: 'peptide',
            commonDosage: '0.75-1.5 mg/week',
            notes: 'GLP-1 agonist'
        },
        {
            id: 'pep048',
            name: 'Retatrutide',
            category: 'peptide',
            commonDosage: '4-12 mg/week',
            notes: 'Triple agonist, weight loss'
        },
        {
            id: 'pep049',
            name: 'CagriSema',
            category: 'peptide',
            commonDosage: 'Variable',
            notes: 'Combination peptide'
        },
        {
            id: 'pep050',
            name: 'Oxytocin',
            category: 'peptide',
            commonDosage: '10-40 IU/day',
            notes: 'Social bonding, anxiolytic'
        },
        {
            id: 'pep051',
            name: 'Vasopressin',
            category: 'peptide',
            commonDosage: '5-20 IU as needed',
            notes: 'Antidiuretic hormone'
        },
        {
            id: 'pep052',
            name: 'Desmopressin',
            category: 'peptide',
            commonDosage: '0.1-0.4 mg/day',
            notes: 'Synthetic vasopressin analog'
        },
        {
            id: 'pep053',
            name: 'Thymosin Alpha-1',
            category: 'peptide',
            commonDosage: '1.6 mg 2x/week',
            notes: 'Immune system enhancement'
        },
        {
            id: 'pep054',
            name: 'LL-37',
            category: 'peptide',
            commonDosage: '5 mg 2x/week',
            notes: 'Antimicrobial peptide, immune support'
        },
        {
            id: 'pep055',
            name: 'KPV',
            category: 'peptide',
            commonDosage: '500-1000 mcg/day',
            notes: 'Anti-inflammatory peptide'
        },
        {
            id: 'pep056',
            name: 'GHK',
            category: 'peptide',
            commonDosage: '1-2 mg 3x/week',
            notes: 'Tissue repair, anti-inflammatory'
        },
        {
            id: 'pep057',
            name: 'Copper Peptide GHK-Cu',
            category: 'peptide',
            commonDosage: '1-3 mg 3x/week',
            notes: 'Skin health, wound healing'
        },
        {
            id: 'pep058',
            name: 'Matrixyl (Palmitoyl Pentapeptide)',
            category: 'peptide',
            commonDosage: 'Topical',
            notes: 'Collagen production, anti-aging'
        },
        {
            id: 'pep059',
            name: 'Argireline',
            category: 'peptide',
            commonDosage: 'Topical',
            notes: 'Anti-wrinkle, muscle relaxant'
        },
        {
            id: 'pep060',
            name: 'Snap-8',
            category: 'peptide',
            commonDosage: 'Topical',
            notes: 'Anti-wrinkle peptide'
        },
        {
            id: 'pep061',
            name: 'Melanotan I',
            category: 'peptide',
            commonDosage: '0.5-1 mg 2x/week',
            notes: 'Tanning peptide, safer than MT2'
        },
        {
            id: 'pep062',
            name: 'DSIP (Delta Sleep-Inducing Peptide)',
            category: 'peptide',
            commonDosage: '100-300 mcg before bed',
            notes: 'Sleep quality, stress reduction'
        },
        {
            id: 'pep063',
            name: 'Pinealon',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Brain/nervous system support'
        },
        {
            id: 'pep064',
            name: 'Cortagen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Brain and immune system'
        },
        {
            id: 'pep065',
            name: 'Vilon',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Immune and digestive system'
        },
        {
            id: 'pep066',
            name: 'Thyreogen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Thyroid support'
        },
        {
            id: 'pep067',
            name: 'Vezugen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Vascular system support'
        },
        {
            id: 'pep068',
            name: 'Bronchogen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Respiratory system support'
        },
        {
            id: 'pep069',
            name: 'Cardiogen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Cardiovascular support'
        },
        {
            id: 'pep070',
            name: 'Hepatogen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Liver support'
        },
        {
            id: 'pep071',
            name: 'Pielotax',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Kidney support'
        },
        {
            id: 'pep072',
            name: 'Prostatilen',
            category: 'peptide',
            commonDosage: '10 mg/day for 10 days',
            notes: 'Prostate health'
        },
        {
            id: 'pep073',
            name: 'Ovagen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Digestive system support'
        },
        {
            id: 'pep074',
            name: 'Endoluten',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Pineal gland, circadian rhythm'
        },
        {
            id: 'pep075',
            name: 'Crystagen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Immune system support'
        },
        {
            id: 'pep076',
            name: 'Gotratix',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Muscle tissue support'
        },
        {
            id: 'pep077',
            name: 'Sigumir',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Cartilage and joint support'
        },
        {
            id: 'pep078',
            name: 'Vladonix',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Thymus and immune system'
        },
        {
            id: 'pep079',
            name: 'Chonluten',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Bronchial and lung support'
        },
        {
            id: 'pep080',
            name: 'Ventfort',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Vascular system peptide'
        },
        {
            id: 'pep081',
            name: 'Stamakort',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Gastric mucosa support'
        },
        {
            id: 'pep082',
            name: 'Cerluten',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Brain and nervous system'
        },
        {
            id: 'pep083',
            name: 'Honluten',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Respiratory system'
        },
        {
            id: 'pep084',
            name: 'Libidon',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Prostate and urinary health'
        },
        {
            id: 'pep085',
            name: 'Testagen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Testicular function'
        },
        {
            id: 'pep086',
            name: 'Zhenoluten',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Ovarian function support'
        },
        {
            id: 'pep087',
            name: 'Svetinorm',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Liver bioregulator'
        },
        {
            id: 'pep088',
            name: 'Cerebramin',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Brain tissue extract'
        },
        {
            id: 'pep089',
            name: 'Glandokort',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Adrenal gland support'
        },
        {
            id: 'pep090',
            name: 'Pankragen',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Pancreas support'
        },
        {
            id: 'pep091',
            name: 'Chelohart',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Heart muscle support'
        },
        {
            id: 'pep092',
            name: 'Suprefort',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Pancreatic islet cells'
        },
        {
            id: 'pep093',
            name: 'Taxorest',
            category: 'peptide',
            commonDosage: '20 mg/day for 10 days',
            notes: 'Respiratory tract support'
        },
        {
            id: 'pep094',
            name: 'PNC-27',
            category: 'peptide',
            commonDosage: 'Variable',
            notes: 'Cancer research peptide'
        },
        {
            id: 'pep095',
            name: 'FOXO4-DRI',
            category: 'peptide',
            commonDosage: 'Variable',
            notes: 'Senolytic peptide'
        },
        {
            id: 'pep096',
            name: 'Pentosan Polysulfate',
            category: 'peptide',
            commonDosage: '100 mg 2x/week',
            notes: 'Joint and cartilage repair'
        },
        {
            id: 'pep097',
            name: 'Actovegin',
            category: 'peptide',
            commonDosage: 'Variable',
            notes: 'Blood derivative, metabolism'
        },
        {
            id: 'pep098',
            name: 'FGL (Fluoroglycofen)',
            category: 'peptide',
            commonDosage: '1 mg/day',
            notes: 'Cognitive enhancement'
        },
        {
            id: 'pep099',
            name: 'Noopept',
            category: 'peptide',
            commonDosage: '10-30 mg/day',
            notes: 'Nootropic peptide'
        },
        {
            id: 'pep100',
            name: 'N-Acetyl Semax Amidate',
            category: 'peptide',
            commonDosage: '300-600 mcg 2x/day',
            notes: 'Enhanced cognitive peptide'
        },
        {
            id: 'pep101',
            name: 'Epitalon Amidate',
            category: 'peptide',
            commonDosage: '5-10 mg/cycle',
            notes: 'Longer-acting epithalon'
        },
        {
            id: 'pep102',
            name: 'Mifepristone RU-486',
            category: 'peptide',
            commonDosage: 'Medical supervision',
            notes: 'Cortisol antagonist'
        },
        {
            id: 'pep103',
            name: 'Oxiracetam',
            category: 'peptide',
            commonDosage: '800-2400 mg/day',
            notes: 'Racetam nootropic'
        },
        {
            id: 'pep104',
            name: 'Aniracetam',
            category: 'peptide',
            commonDosage: '750-1500 mg/day',
            notes: 'Anxiolytic nootropic'
        },
        {
            id: 'pep105',
            name: 'Phenylpiracetam',
            category: 'peptide',
            commonDosage: '100-200 mg/day',
            notes: 'Stimulating nootropic'
        },
        {
            id: 'pep106',
            name: 'Coluracetam',
            category: 'peptide',
            commonDosage: '20-80 mg/day',
            notes: 'Memory enhancement'
        },
        {
            id: 'pep107',
            name: 'Sunifiram',
            category: 'peptide',
            commonDosage: '5-10 mg/day',
            notes: 'Potent nootropic'
        },
        {
            id: 'pep108',
            name: 'NSI-189',
            category: 'peptide',
            commonDosage: '40 mg/day',
            notes: 'Neurogenesis, depression'
        },
        {
            id: 'pep109',
            name: 'Compound 7P',
            category: 'peptide',
            commonDosage: '1-3 mg/day',
            notes: 'Cognitive enhancement'
        },
        {
            id: 'pep110',
            name: 'J147',
            category: 'peptide',
            commonDosage: 'Variable',
            notes: 'Neuroprotective compound'
        },
        {
            id: 'pep111',
            name: 'CMS-121',
            category: 'peptide',
            commonDosage: 'Variable',
            notes: 'Alzheimer\'s research'
        },
        {
            id: 'pep112',
            name: 'Alcar (Acetyl-L-Carnitine)',
            category: 'peptide',
            commonDosage: '500-2000 mg/day',
            notes: 'Energy, cognitive support'
        },
        {
            id: 'pep113',
            name: 'NAC (N-Acetyl Cysteine)',
            category: 'peptide',
            commonDosage: '600-1800 mg/day',
            notes: 'Antioxidant, glutathione precursor'
        },
        {
            id: 'pep114',
            name: 'Glutathione',
            category: 'peptide',
            commonDosage: '200-500 mg/day',
            notes: 'Master antioxidant'
        },
        {
            id: 'pep115',
            name: 'NAD+ (Injectable)',
            category: 'peptide',
            commonDosage: '100-500 mg/session',
            notes: 'Cellular energy, longevity'
        },
        {
            id: 'pep116',
            name: 'NMN (Injectable)',
            category: 'peptide',
            commonDosage: '50-250 mg 3x/week',
            notes: 'NAD+ precursor'
        },
        {
            id: 'pep117',
            name: 'Alpha-Lipoic Acid (Injectable)',
            category: 'peptide',
            commonDosage: '300-600 mg/week',
            notes: 'Antioxidant, neuroprotective'
        },
        {
            id: 'pep118',
            name: 'MIC (Methionine Inositol Choline)',
            category: 'peptide',
            commonDosage: '1 ml 1-3x/week',
            notes: 'Lipotropic fat loss injection'
        },
        {
            id: 'pep119',
            name: 'L-Carnitine (Injectable)',
            category: 'peptide',
            commonDosage: '500-1000 mg 2-3x/week',
            notes: 'Fat metabolism, energy'
        },
        {
            id: 'pep120',
            name: 'B-Complex (Injectable)',
            category: 'peptide',
            commonDosage: '1-2 ml/week',
            notes: 'Energy, metabolism'
        },
        {
            id: 'pep121',
            name: 'Vitamin D3 (Injectable)',
            category: 'peptide',
            commonDosage: '50,000 IU monthly',
            notes: 'Vitamin D supplementation'
        }
    ],
    
    steroids: [
        {
            id: 'aas001',
            name: 'Testosterone Cypionate',
            category: 'aas',
            commonDosage: '100-500 mg/week',
            notes: 'Long-acting testosterone ester'
        },
        {
            id: 'aas002',
            name: 'Testosterone Enanthate',
            category: 'aas',
            commonDosage: '100-500 mg/week',
            notes: 'Long-acting testosterone ester'
        },
        {
            id: 'aas003',
            name: 'Testosterone Propionate',
            category: 'aas',
            commonDosage: '50-150 mg EOD',
            notes: 'Short-acting testosterone ester'
        },
        {
            id: 'aas004',
            name: 'Testosterone Phenylpropionate',
            category: 'aas',
            commonDosage: '100-300 mg/week',
            notes: 'Medium-acting testosterone ester'
        },
        {
            id: 'aas005',
            name: 'Testosterone Isocaproate',
            category: 'aas',
            commonDosage: '100-300 mg/week',
            notes: 'Medium-acting testosterone ester'
        },
        {
            id: 'aas006',
            name: 'Testosterone Decanoate',
            category: 'aas',
            commonDosage: '200-400 mg/2 weeks',
            notes: 'Very long-acting testosterone ester'
        },
        {
            id: 'aas007',
            name: 'Testosterone Undecanoate',
            category: 'aas',
            commonDosage: '750-1000 mg/10-14 weeks',
            notes: 'Ultra long-acting testosterone ester'
        },
        {
            id: 'aas008',
            name: 'Sustanon 250',
            category: 'aas',
            commonDosage: '250-750 mg/week',
            notes: 'Testosterone blend (4 esters)'
        },
        {
            id: 'aas009',
            name: 'Omnadren',
            category: 'aas',
            commonDosage: '250-750 mg/week',
            notes: 'Testosterone blend (4 esters)'
        },
        {
            id: 'aas010',
            name: 'Testosterone Suspension',
            category: 'aas',
            commonDosage: '50-100 mg/day',
            notes: 'No ester, water-based'
        },
        {
            id: 'aas011',
            name: 'TNE (Test No Ester)',
            category: 'aas',
            commonDosage: '50-100 mg pre-workout',
            notes: 'Pre-workout testosterone base'
        },
        {
            id: 'aas012',
            name: 'Nandrolone Decanoate (Deca)',
            category: 'aas',
            commonDosage: '200-600 mg/week',
            notes: 'Long-acting 19-nor, joint support'
        },
        {
            id: 'aas013',
            name: 'Nandrolone Phenylpropionate (NPP)',
            category: 'aas',
            commonDosage: '100-200 mg EOD',
            notes: 'Short-acting 19-nor'
        },
        {
            id: 'aas014',
            name: 'Trenbolone Acetate',
            category: 'aas',
            commonDosage: '50-100 mg EOD',
            notes: 'Short-acting, potent 19-nor'
        },
        {
            id: 'aas015',
            name: 'Trenbolone Enanthate',
            category: 'aas',
            commonDosage: '200-600 mg/week',
            notes: 'Long-acting trenbolone'
        },
        {
            id: 'aas016',
            name: 'Trenbolone Hexahydrobenzylcarbonate',
            category: 'aas',
            commonDosage: '150-300 mg/week',
            notes: 'Parabolan, long-acting tren'
        },
        {
            id: 'aas017',
            name: 'Boldenone Undecylenate (Equipoise)',
            category: 'aas',
            commonDosage: '300-600 mg/week',
            notes: 'Long-acting, increases RBC'
        },
        {
            id: 'aas018',
            name: 'Boldenone Cypionate',
            category: 'aas',
            commonDosage: '300-600 mg/week',
            notes: 'Medium-acting boldenone'
        },
        {
            id: 'aas019',
            name: 'Drostanolone Propionate (Masteron)',
            category: 'aas',
            commonDosage: '300-600 mg/week',
            notes: 'DHT derivative, hardening'
        },
        {
            id: 'aas020',
            name: 'Drostanolone Enanthate',
            category: 'aas',
            commonDosage: '400-600 mg/week',
            notes: 'Long-acting masteron'
        },
        {
            id: 'aas021',
            name: 'Methenolone Enanthate (Primobolan)',
            category: 'aas',
            commonDosage: '400-800 mg/week',
            notes: 'Mild, low side effects'
        },
        {
            id: 'aas022',
            name: 'Methenolone Acetate',
            category: 'aas',
            commonDosage: '50-100 mg EOD',
            notes: 'Short-acting primobolan'
        },
        {
            id: 'aas023',
            name: 'Stanozolol (Winstrol Injectable)',
            category: 'aas',
            commonDosage: '50-100 mg/day or EOD',
            notes: 'DHT derivative, water-based'
        },
        {
            id: 'aas024',
            name: 'Mesterolone (Proviron Injectable)',
            category: 'aas',
            commonDosage: 'Rare - typically oral',
            notes: 'DHT derivative, SHBG binding'
        },
        {
            id: 'aas025',
            name: 'Testosterone/Trenbolone/Masteron Blend',
            category: 'aas',
            commonDosage: '1-2 ml/week',
            notes: 'Common cutting blend'
        },
        {
            id: 'aas026',
            name: 'Testosterone/Nandrolone/Boldenone Blend',
            category: 'aas',
            commonDosage: '1-2 ml/week',
            notes: 'Bulking blend'
        },
        {
            id: 'aas027',
            name: 'Test/Tren/EQ Blend',
            category: 'aas',
            commonDosage: '1-2 ml/week',
            notes: 'Recomp blend'
        },
        {
            id: 'aas028',
            name: 'Trenbolone Base (No Ester)',
            category: 'aas',
            commonDosage: '50-100 mg pre-workout',
            notes: 'Immediate acting trenbolone'
        },
        {
            id: 'aas029',
            name: 'Nandrolone Base (No Ester)',
            category: 'aas',
            commonDosage: '50-100 mg pre-workout',
            notes: 'Immediate acting nandrolone'
        },
        {
            id: 'aas030',
            name: 'Drostanolone Base (No Ester)',
            category: 'aas',
            commonDosage: '50-100 mg pre-workout',
            notes: 'Immediate acting masteron'
        },
        {
            id: 'aas031',
            name: 'DHB (Dihydroboldenone/1-Testosterone)',
            category: 'aas',
            commonDosage: '200-400 mg/week',
            notes: 'Boldenone derivative, no aromatization'
        },
        {
            id: 'aas032',
            name: 'MENT (Trestolone Acetate)',
            category: 'aas',
            commonDosage: '10-50 mg/day',
            notes: 'Highly potent 19-nor'
        },
        {
            id: 'aas033',
            name: 'Stenbolone Acetate',
            category: 'aas',
            commonDosage: '50-100 mg EOD',
            notes: 'DHT derivative'
        },
        {
            id: 'aas034',
            name: 'Methyl-1-Testosterone (Injectable)',
            category: 'aas',
            commonDosage: '10-20 mg/day',
            notes: 'Highly potent DHT derivative'
        },
        {
            id: 'aas035',
            name: 'Testosterone Acetate',
            category: 'aas',
            commonDosage: '50-100 mg EOD',
            notes: 'Very short-acting testosterone'
        },
        {
            id: 'aas036',
            name: 'Nandrolone Cypionate',
            category: 'aas',
            commonDosage: '200-400 mg/week',
            notes: 'Medium-acting nandrolone'
        },
        {
            id: 'aas037',
            name: 'Testosterone Blend (Custom)',
            category: 'aas',
            commonDosage: 'Variable',
            notes: 'Custom testosterone ester blends'
        },
        {
            id: 'aas038',
            name: 'Tri-Tren (Trenbolone Blend)',
            category: 'aas',
            commonDosage: '200-400 mg/week',
            notes: 'Three trenbolone esters'
        },
        {
            id: 'aas039',
            name: 'Tri-Test (Testosterone Blend)',
            category: 'aas',
            commonDosage: '300-600 mg/week',
            notes: 'Three testosterone esters'
        },
        {
            id: 'aas040',
            name: 'Super Test 450',
            category: 'aas',
            commonDosage: '450-900 mg/week',
            notes: 'High concentration test blend'
        }
    ]
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATABASE;
}
