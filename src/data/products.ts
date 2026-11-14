import { Product, CollectionType } from '../types';

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------
  // 1. PRINTED LAWN SUITS (8 items)
  // -------------------------------------------------------------
  {
    id: 'pr-lawn-01',
    name: 'Gul-e-Rana Floral Printed Lawn',
    brand: 'NOORÉ',
    category: 'Printed Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Ivory & Blush Pink',
    colorHex: '#F6E6E8',
    description: 'An ethereal printed lawn ensemble inspired by Mughal gardens in Lahore. Crafted from premium 80s count lawn fabric featuring delicate botanical motifs and an airy printed voile dupatta.',
    designDetails: {
      shirt: 'Digitally printed luxury lawn shirt front, back, and sleeves (3.0 Meters)',
      dupatta: 'Printed Swiss Voile Dupatta with finished borders (2.5 Meters)',
      trouser: 'Dyed Cambric Cotton Trouser (2.5 Meters)',
      embroidery: 'Embroidered organza neckline patti with sequin accents'
    },
    unstitchedIncludes: {
      shirt: 'Digital Printed Premium Lawn Shirt (3.0 Meters)',
      dupatta: 'Digital Printed Voile Dupatta (2.5 Meters)',
      trouser: 'Dyed Solid Cambric Trouser (2.5 Meters)',
      borders: '1 Embroidered Organza Neckline Patch'
    },
    originalPrice: 5850,
    discountedPrice: 4680,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 42,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean recommended for first wash', 'Do not bleach or stain-remove chemicals', 'Iron at medium temperature', 'Dry in shade away from direct sunlight'],
    sku: 'NRE-PLN-01'
  },
  {
    id: 'pr-lawn-02',
    name: 'Mehar Classic Monochrome Lawn',
    brand: 'NOORÉ',
    category: 'Printed Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Black & Antique White',
    colorHex: '#222222',
    description: 'Striking black and ivory monochrome geometric prints accented with traditional block-print motifs. Paired with a contrast printed lawn dupatta and dyed trousers.',
    designDetails: {
      shirt: 'Classic geometric printed lawn shirt (3.0 Meters)',
      dupatta: 'Printed Pure Lawn Dupatta with striped borders (2.5 Meters)',
      trouser: 'Solid black dyed cambric trouser (2.5 Meters)',
      embroidery: 'Delicate lace hem border patch included'
    },
    unstitchedIncludes: {
      shirt: 'Printed Lawn Shirt Fabric (3.0 Meters)',
      dupatta: 'Printed Lawn Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser (2.5 Meters)',
      borders: 'Embroidered organza Daman border (1 Meter)'
    },
    originalPrice: 4950,
    discountedPrice: 4200,
    discountPercentage: 15,
    rating: 4.7,
    reviewsCount: 31,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    careInstructions: ['Hand wash cold with mild detergent', 'Iron inside out', 'Do not tumble dry'],
    sku: 'NRE-PLN-02'
  },
  {
    id: 'pr-lawn-03',
    name: 'Darya Teal Paradise 3-Piece',
    brand: 'NOORÉ',
    category: '3-Piece Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Teal Blue',
    colorHex: '#006D77',
    description: 'Deep ocean teal lawn embellished with Persian paisley and ornamental tile prints. Paired with a feather-light printed chiffon dupatta.',
    designDetails: {
      shirt: 'Digital printed luxury lawn shirt (3.0 Meters)',
      dupatta: 'Lightweight Printed Bambberg Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed solid cambric trouser (2.5 Meters)',
      embroidery: 'Embroidered neckline patch with zari work'
    },
    unstitchedIncludes: {
      shirt: 'Digitally printed lawn fabric (3.0 Meters)',
      dupatta: 'Printed Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed Trouser Fabric (2.5 Meters)',
      borders: '1 Embroidered Zari Neck Patch'
    },
    originalPrice: 5490,
    discountedPrice: 4390,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 56,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean recommended', 'Iron on low setting', 'Dry flat'],
    sku: 'NRE-PLN-03'
  },
  {
    id: 'pr-lawn-04',
    name: 'Saffron Dusk Printed 2-Piece',
    brand: 'NOORÉ',
    category: '2-Piece Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '2-Piece',
    color: 'Mustard Gold',
    colorHex: '#D4A373',
    description: 'Vibrant mustard and ochre hues blend with Kashmiri tilla patterns in this easy breezy 2-piece unstitched lawn shirt and dupatta combo.',
    designDetails: {
      shirt: 'Printed Lawn Shirt Front & Back (3.0 Meters)',
      dupatta: 'Printed Crinkle Chiffon Dupatta (2.5 Meters)',
      trouser: 'N/A (2-Piece Shirt & Dupatta)',
      embroidery: 'Screen printed gold foil highlights on border'
    },
    unstitchedIncludes: {
      shirt: 'Printed Lawn Shirt (3.0 Meters)',
      dupatta: 'Printed Chiffon Dupatta (2.5 Meters)',
      trouser: 'None (2-Piece Shirt & Dupatta)'
    },
    originalPrice: 3850,
    discountedPrice: 3270,
    discountPercentage: 15,
    rating: 4.6,
    reviewsCount: 19,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Hand wash separately in cold water', 'Medium iron'],
    sku: 'NRE-PLN-04'
  },
  {
    id: 'pr-lawn-05',
    name: 'Bahar-e-Nau Emerald 3-Piece',
    brand: 'NOORÉ',
    category: 'Printed Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Emerald Green',
    colorHex: '#1B4332',
    description: 'An elegant emerald tone featuring traditional chunri and ikat motifs with a soft printed chiffon dupatta. Perfect for daytime get-togethers.',
    designDetails: {
      shirt: 'Fine combed lawn shirt with ethnic print (3.0 Meters)',
      dupatta: 'Breeze Chiffon Printed Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric cotton trouser (2.5 Meters)',
      embroidery: 'Printed borders with resham highlights'
    },
    unstitchedIncludes: {
      shirt: 'Printed Lawn Fabric (3.0 Meters)',
      dupatta: 'Printed Chiffon Dupatta (2.5 Meters)',
      trouser: 'Solid Cambric Trouser (2.5 Meters)'
    },
    originalPrice: 5200,
    discountedPrice: 4160,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 28,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Gentle wash', 'Avoid direct sun drying to retain luster'],
    sku: 'NRE-PLN-05'
  },
  {
    id: 'pr-lawn-06',
    name: 'Lilac Whisper Contemporary 3-Piece',
    brand: 'NOORÉ',
    category: 'Unstitched Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Lilac Mauve',
    colorHex: '#CDB4DB',
    description: 'Pastel lilac canvas with pastel English roses and French scrollwork prints. Includes printed lawn trouser and embroidered organza sleeves patti.',
    designDetails: {
      shirt: 'Printed Supima Lawn Shirt (3.0 Meters)',
      dupatta: 'Printed Voile Dupatta with scalloped edges (2.5 Meters)',
      trouser: 'All-over printed cambric trouser (2.5 Meters)',
      embroidery: 'Organza sleeves and hem embroidered patti (2 Meters)'
    },
    unstitchedIncludes: {
      shirt: 'Super Combed Lawn Shirt (3.0 Meters)',
      dupatta: 'Voile Printed Dupatta (2.5 Meters)',
      trouser: 'Matching Printed Trouser (2.5 Meters)',
      borders: '2 Embroidered Organza Borders'
    },
    originalPrice: 6200,
    discountedPrice: 4960,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 38,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean or hand wash', 'Steam iron'],
    sku: 'NRE-PLN-06'
  },
  {
    id: 'pr-lawn-07',
    name: 'Afrooz Indigo Blockprint 2-Piece',
    brand: 'NOORÉ',
    category: '2-Piece Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '2-Piece',
    color: 'Indigo Blue',
    colorHex: '#2B2D42',
    description: 'Authentic Sindhi Ajrak & block-print aesthetics reimagined in soft lawn fabric. Comes with shirt piece and matching block-printed trouser.',
    designDetails: {
      shirt: 'Indigo discharge printed lawn shirt (3.0 Meters)',
      dupatta: 'N/A (2-Piece Shirt & Trouser)',
      trouser: 'Indigo printed cambric trouser (2.5 Meters)',
      embroidery: 'Subtle zari top-stitching thread pack included'
    },
    unstitchedIncludes: {
      shirt: 'Printed Lawn Shirt (3.0 Meters)',
      dupatta: 'None',
      trouser: 'Printed Cambric Trouser (2.5 Meters)'
    },
    originalPrice: 3990,
    discountedPrice: 3390,
    discountPercentage: 15,
    rating: 4.5,
    reviewsCount: 17,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Wash separately on cold wash', 'Use mild soap'],
    sku: 'NRE-PLN-07'
  },
  {
    id: 'pr-lawn-08',
    name: 'Nargis Lemon Zest 3-Piece',
    brand: 'NOORÉ',
    category: 'Sale Collection',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Lemon Yellow',
    colorHex: '#FDE047',
    description: 'A radiant lemon yellow sunny lawn suit with delicate floral vines and a breezy printed jacquard net dupatta. Ideal for summer afternoons.',
    designDetails: {
      shirt: 'Fine printed lawn shirt (3.0 Meters)',
      dupatta: 'Printed textured jacquard dupatta (2.5 Meters)',
      trouser: 'Dyed cambric trouser (2.5 Meters)',
      embroidery: 'Embroidered neckline motif'
    },
    unstitchedIncludes: {
      shirt: 'Printed Lawn Shirt (3.0 Meters)',
      dupatta: 'Jacquard Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser (2.5 Meters)',
      borders: '1 Embroidered Neck Motif'
    },
    originalPrice: 5600,
    discountedPrice: 3920,
    discountPercentage: 30,
    rating: 4.8,
    reviewsCount: 44,
    collection: 'Sale',
    isOnSale: true,
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    careInstructions: ['Hand wash cold', 'Iron damp'],
    sku: 'NRE-PLN-08'
  },

  // -------------------------------------------------------------
  // 2. EMBROIDERED LAWN SUITS (6 items)
  // -------------------------------------------------------------
  {
    id: 'emb-lawn-01',
    name: 'Zarmeen Resham Embroidered Luxury Lawn',
    brand: 'NOORÉ',
    category: 'Embroidered Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Powder Blue',
    colorHex: '#B8C0CC',
    description: 'Heavy silk thread resham embroidery covers the front with intricate marori work on the daman. Comes paired with an embroidered organza border dupatta and dyed trousers.',
    designDetails: {
      shirt: 'Embroidered Lawn Front (1.25m), Dyed Lawn Back & Sleeves (1.75m)',
      dupatta: 'Heavy Embroidered Organza Dupatta with 4-side scallop border (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser with embroidered patti (2.5 Meters)',
      embroidery: 'Resham, tilla and 3mm sequin embroidery across front and daman'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Lawn Front, Back & Sleeves (3.0 Meters)',
      dupatta: 'Embroidered Organza Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Cotton Trouser (2.5 Meters)',
      borders: 'Embroidered Organza Daman & Sleeve Borders (2.5 Meters)'
    },
    originalPrice: 10500,
    discountedPrice: 8925,
    discountPercentage: 15,
    rating: 4.9,
    reviewsCount: 68,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Strictly dry clean only', 'Do not squeeze or wring', 'Iron with protective cloth on embroidery'],
    sku: 'NRE-EMB-01'
  },
  {
    id: 'emb-lawn-02',
    name: 'Firdaus Peach Kashmiri Embroidered Lawn',
    brand: 'NOORÉ',
    category: 'Embroidered Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Warm Peach',
    colorHex: '#F4A261',
    description: 'Inspired by Kashmiri kashida embroidery, this luxury unstitched lawn suit features exquisite floral vines along the neckline and sleeves with pure crinkle chiffon dupatta.',
    designDetails: {
      shirt: 'Embroidered Lawn Front & Plain Back (3.0 Meters)',
      dupatta: 'Embroidered Pure Crinkle Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed Cotton Trouser with embroidered hem border (2.5 Meters)',
      embroidery: 'Kashmiri thread embroidery with golden thread accents'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Lawn Front & Plain Back/Sleeves (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser (2.5 Meters)',
      borders: 'Embroidered Trouser Border Patti (1 Meter)'
    },
    originalPrice: 9400,
    discountedPrice: 7990,
    discountPercentage: 15,
    rating: 4.8,
    reviewsCount: 52,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: true,
    careInstructions: ['Dry clean only', 'Store in cotton bag'],
    sku: 'NRE-EMB-02'
  },
  {
    id: 'emb-lawn-03',
    name: 'Chikan-Kari White Pearl Luxury Lawn',
    brand: 'NOORÉ',
    category: 'Unstitched Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Pearl Ivory White',
    colorHex: '#FAF7F2',
    description: 'Breathtaking all-over schiffli chikankari embroidery on pure ivory lawn. Features laser-cut daman borders and an embroidered silk organza dupatta.',
    designDetails: {
      shirt: 'Full Schiffli Chikankari Lawn Front & Sleeves (3.0 Meters)',
      dupatta: 'Digital Printed & Embroidered Silk Organza Dupatta (2.5 Meters)',
      trouser: 'Chikankari embroidered cotton trouser (2.5 Meters)',
      embroidery: 'Laser cut schiffli, pearl embellishments and delicate threadwork'
    },
    unstitchedIncludes: {
      shirt: 'Schiffli Embroidered Lawn Shirt (3.0 Meters)',
      dupatta: 'Embroidered Organza Dupatta (2.5 Meters)',
      trouser: 'Embroidered Cotton Trouser (2.5 Meters)',
      borders: 'Laser Cut Schiffli Daman Border'
    },
    originalPrice: 12500,
    discountedPrice: 10625,
    discountPercentage: 15,
    rating: 5.0,
    reviewsCount: 89,
    collection: 'Lawn Collection',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Professional dry clean recommended', 'Steam iron only'],
    sku: 'NRE-EMB-03'
  },
  {
    id: 'emb-lawn-04',
    name: 'Gulzar Crimson Festive Lawn',
    brand: 'NOORÉ',
    category: 'Festive Collection',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Deep Crimson Red',
    colorHex: '#9E2A2B',
    description: 'A regal crimson canvas layered with tilla and resham floral vines. Comes with a foil-printed organza dupatta featuring scalloped borders.',
    designDetails: {
      shirt: 'Embroidered Luxury Lawn Front & Back (3.0 Meters)',
      dupatta: 'Foil Printed & Embroidered Organza Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser with embroidered patch (2.5 Meters)',
      embroidery: 'Golden zari, marori cord, and dull gold sequin work'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Lawn Shirt (3.0 Meters)',
      dupatta: 'Embroidered Foil Organza Dupatta (2.5 Meters)',
      trouser: 'Cambric Trouser (2.5 Meters)',
      borders: 'Heavy Zari Daman and Neckline Patti'
    },
    originalPrice: 11900,
    discountedPrice: 9520,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 47,
    collection: 'Festive Collection',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean only', 'Keep wrapped in muslin cloth'],
    sku: 'NRE-EMB-04'
  },
  {
    id: 'emb-lawn-05',
    name: 'Mah-Rukh Mint Green 3-Piece',
    brand: 'NOORÉ',
    category: 'Embroidered Lawn Suits',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Mint Sage Green',
    colorHex: '#94D2BD',
    description: 'Soothing mint lawn with tone-on-tone ivory threadwork and subtle mirror-effect sequin embroidery. Accented by a printed jacquard dupatta.',
    designDetails: {
      shirt: 'Embroidered lawn front panel with side motifs (3.0 Meters)',
      dupatta: 'Monochrome Jacquard Weaved Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric cotton trouser (2.5 Meters)',
      embroidery: 'Tone on tone resham thread embroidery'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Front & Dyed Back (3.0 Meters)',
      dupatta: 'Jacquard Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser (2.5 Meters)'
    },
    originalPrice: 8750,
    discountedPrice: 7000,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 35,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Dry clean or delicate hand wash', 'Iron on reverse'],
    sku: 'NRE-EMB-05'
  },
  {
    id: 'emb-lawn-06',
    name: 'Shehrbano Royal Navy Embroidered Lawn',
    brand: 'NOORÉ',
    category: 'Sale Collection',
    fabric: 'Lawn',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Royal Navy Blue',
    colorHex: '#1D3557',
    description: 'Deep navy lawn decorated with contrast silver-grey resham embroidery and delicate cutwork panels. Complemented by an embroidered crinkle chiffon dupatta.',
    designDetails: {
      shirt: 'Heavily embroidered lawn front (3.0 Meters)',
      dupatta: 'Embroidered Crinkle Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Trouser (2.5 Meters)',
      embroidery: 'Resham and silver tilla work along borders'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Lawn Shirt (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Dupatta (2.5 Meters)',
      trouser: 'Cambric Trouser (2.5 Meters)',
      borders: 'Embroidered Daman Cutwork Patch'
    },
    originalPrice: 9800,
    discountedPrice: 6860,
    discountPercentage: 30,
    rating: 4.8,
    reviewsCount: 41,
    collection: 'Sale',
    isOnSale: true,
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Dry clean only', 'Do not bleach'],
    sku: 'NRE-EMB-06'
  },

  // -------------------------------------------------------------
  // 3. CHIFFON SUITS (4 items)
  // -------------------------------------------------------------
  {
    id: 'chf-01',
    name: 'Noor-ul-Ain Pure Chiffon Luxury Formal',
    brand: 'NOORÉ',
    category: 'Chiffon Suits',
    fabric: 'Chiffon',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Champagne Gold & Beige',
    colorHex: '#C5A16A',
    description: 'An ode to royal Pakistani bridal and festive heritage. Heavy hand-embellished pure crinkle chiffon shirt adorned with dabka, gota, crystals, and pearl work. Paired with a four-sided embroidered dupatta.',
    designDetails: {
      shirt: 'Hand-embellished Pure Chiffon Front, Back & Sleeves (3.0 Meters)',
      dupatta: 'Heavily Embroidered Chiffon Dupatta with Kiran Lace (2.5 Meters)',
      trouser: 'Dyed Pure Raw Silk Trouser (2.5 Meters)',
      embroidery: 'Zardozi, dabka, naqshi, cutdana, sequins and pearl craftsmanship'
    },
    unstitchedIncludes: {
      shirt: 'Handcrafted Chiffon Shirt (3.0 Meters)',
      dupatta: 'Four-sided Embroidered Dupatta with Kiran Lace (2.5 Meters)',
      trouser: 'Pure Raw Silk Trouser (2.5 Meters)',
      borders: 'Heavy Zardozi Daman & Sleeve Borders'
    },
    originalPrice: 24500,
    discountedPrice: 20825,
    discountPercentage: 15,
    rating: 5.0,
    reviewsCount: 94,
    collection: 'Luxury Formal',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Specialist dry clean only', 'Store in breathable garment cover', 'Protect embellishments from rough surfaces'],
    sku: 'NRE-CHF-01'
  },
  {
    id: 'chf-02',
    name: 'Nazneen Mauve Embroidered Chiffon',
    brand: 'NOORÉ',
    category: 'Party Wear',
    fabric: 'Chiffon',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Dusty Mauve',
    colorHex: '#9A8C98',
    description: 'Soft dusty mauve pure chiffon embellished with matte silver tilla, resham motifs, and delicate badla detailing. Complete with dyed inner slip and raw silk pants.',
    designDetails: {
      shirt: 'Embroidered Crinkle Chiffon Front & Back (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Dupatta with pearl scalloping (2.5 Meters)',
      trouser: 'Dyed Raw Silk Trouser (2.5 Meters) + Cotton Silk Inner Slip (2.0 Meters)',
      embroidery: 'Badla, tilla and threadwork'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Chiffon Shirt (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed Raw Silk Trouser (2.5 Meters)',
      borders: 'Inner Slip Fabric (2.0 Meters) & Embroidered Neckline'
    },
    originalPrice: 18500,
    discountedPrice: 15725,
    discountPercentage: 15,
    rating: 4.8,
    reviewsCount: 39,
    collection: 'Festive Collection',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    careInstructions: ['Dry clean only', 'Keep out of direct sunlight'],
    sku: 'NRE-CHF-02'
  },
  {
    id: 'chf-03',
    name: 'Sultana Emerald Green Formal Chiffon',
    brand: 'NOORÉ',
    category: 'Wedding Collection',
    fabric: 'Chiffon',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Deep Emerald',
    colorHex: '#1B4332',
    description: 'A striking festive masterpiece featuring antique gold marori embroidery on rich bottle green pure chiffon. Finished with kiran lace on all four dupatta sides.',
    designDetails: {
      shirt: 'Heavily worked chiffon front with kalis and bodice (3.0 Meters)',
      dupatta: 'Embroidered chiffon dupatta with heavy palu borders (2.5 Meters)',
      trouser: 'Dyed Raw Silk Trouser (2.5 Meters)',
      embroidery: 'Antique gold zari, gota patti, and ruby crystal highlights'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Chiffon Panels & Bodice (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Dupatta (2.5 Meters)',
      trouser: 'Raw Silk Trouser (2.5 Meters)',
      borders: 'Embroidered Gota Daman Patti (3 Meters)'
    },
    originalPrice: 21900,
    discountedPrice: 17520,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 61,
    collection: 'Wedding Collection',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Professional dry clean only'],
    sku: 'NRE-CHF-03'
  },
  {
    id: 'chf-04',
    name: 'Raqs Black & Antique Tilla Chiffon',
    brand: 'NOORÉ',
    category: 'Chiffon Suits',
    fabric: 'Chiffon',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Midnight Black',
    colorHex: '#18120F',
    description: 'The epitome of classic evening glamour. Deep jet black crinkle chiffon with copper and antique gold tilla embroidery, accompanied by an embroidered chiffon shawl dupatta.',
    designDetails: {
      shirt: 'Intricately embroidered chiffon front and sleeves (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Shawl Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Silk Trouser (2.5 Meters)',
      embroidery: 'Copper tilla, resham and micro-sequin jaal'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Chiffon Fabric (3.0 Meters)',
      dupatta: 'Embroidered Chiffon Dupatta (2.5 Meters)',
      trouser: 'Dyed Trouser (2.5 Meters)',
      borders: 'Embroidered Neck and Border Patches'
    },
    originalPrice: 16900,
    discountedPrice: 13520,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 45,
    collection: 'Party Wear' as CollectionType,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Dry clean only', 'Do not tumble dry'],
    sku: 'NRE-CHF-04'
  },

  // -------------------------------------------------------------
  // 4. COTTON SUITS (4 items)
  // -------------------------------------------------------------
  {
    id: 'cot-01',
    name: 'Chandni Pure Cotton Embroidered 3-Piece',
    brand: 'NOORÉ',
    category: 'Cotton Suits',
    fabric: 'Cotton',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Ivory Cream',
    colorHex: '#FAF7F2',
    description: 'Crisp handloom-feel pure cotton adorned with white-on-white shadow embroidery. Finished with a woven zari border cotton net dupatta.',
    designDetails: {
      shirt: 'Fine combed pure cotton shirt with thread embroidery (3.0 Meters)',
      dupatta: 'Cotton Net Dupatta with gold zari borders (2.5 Meters)',
      trouser: 'Dyed Pure Cotton Trouser (2.5 Meters)',
      embroidery: 'White shadow stitch and tonal threadwork'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Pure Cotton Shirt (3.0 Meters)',
      dupatta: 'Cotton Net Zari Dupatta (2.5 Meters)',
      trouser: 'Pure Cotton Trouser Fabric (2.5 Meters)',
      borders: 'Organza Neckline Lace Motif'
    },
    originalPrice: 6500,
    discountedPrice: 5200,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 37,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: false,
    careInstructions: ['Gentle machine wash or hand wash', 'Iron while slightly damp for crisp look'],
    sku: 'NRE-COT-01'
  },
  {
    id: 'cot-02',
    name: 'Roshni Mustard Cotton Jacquard',
    brand: 'NOORÉ',
    category: 'Cotton Suits',
    fabric: 'Cotton',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Mustard Ochre',
    colorHex: '#D4A373',
    description: 'Textured woven cotton jacquard base with an embroidered front daman and contrasting printed silk-cotton dupatta. Breathable, durable, and sophisticated.',
    designDetails: {
      shirt: 'Woven Jacquard Pure Cotton (3.0 Meters)',
      dupatta: 'Printed Cotton Silk Dupatta (2.5 Meters)',
      trouser: 'Dyed Cotton Trouser (2.5 Meters)',
      embroidery: 'Resham embroidery patch for hemline'
    },
    unstitchedIncludes: {
      shirt: 'Cotton Jacquard Fabric (3.0 Meters)',
      dupatta: 'Silk Dupatta (2.5 Meters)',
      trouser: 'Cotton Trouser (2.5 Meters)'
    },
    originalPrice: 5900,
    discountedPrice: 4720,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 25,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Cold hand wash', 'Warm iron'],
    sku: 'NRE-COT-02'
  },
  {
    id: 'cot-03',
    name: 'Aseel Cambric Cotton 2-Piece Kurta Suit',
    brand: 'NOORÉ',
    category: '2-Piece Suits',
    fabric: 'Cotton',
    suitType: 'Unstitched',
    pieces: '2-Piece',
    color: 'Terracotta Rust',
    colorHex: '#BC6C25',
    description: 'Earthy terracotta cambric cotton featuring delicate machine schiffli embroidery along sleeves and collar. Perfect for daily office and university wear.',
    designDetails: {
      shirt: 'Schiffli Embroidered Cambric Cotton (2.5 Meters)',
      dupatta: 'N/A (2-Piece Kurta & Shalwar set)',
      trouser: 'Dyed Matching Shalwar Fabric (2.5 Meters)',
      embroidery: 'Cutwork sleeve borders and embroidered buttons'
    },
    unstitchedIncludes: {
      shirt: 'Schiffli Embroidered Cotton (2.5 Meters)',
      dupatta: 'None',
      trouser: 'Cambric Shalwar Fabric (2.5 Meters)'
    },
    originalPrice: 4200,
    discountedPrice: 3570,
    discountPercentage: 15,
    rating: 4.7,
    reviewsCount: 29,
    collection: 'Ready to Wear',
    images: [
      'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Machine wash friendly', 'Tumble dry low'],
    sku: 'NRE-COT-03'
  },
  {
    id: 'cot-04',
    name: 'Breeze Slate Blue Textured Cotton 3-Piece',
    brand: 'NOORÉ',
    category: 'Cotton Suits',
    fabric: 'Cotton',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Slate Blue',
    colorHex: '#4A6FA5',
    description: 'Self-textured slub cotton suit in a regal slate blue shade. Comes with an embroidered organza neckline and printed cotton dupatta.',
    designDetails: {
      shirt: 'Slub Textured Pure Cotton (3.0 Meters)',
      dupatta: 'Printed Soft Cotton Dupatta (2.5 Meters)',
      trouser: 'Solid Cotton Trouser (2.5 Meters)',
      embroidery: 'Embroidered organza neckline patti'
    },
    unstitchedIncludes: {
      shirt: 'Slub Cotton Fabric (3.0 Meters)',
      dupatta: 'Soft Cotton Dupatta (2.5 Meters)',
      trouser: 'Solid Cotton Trouser (2.5 Meters)',
      borders: 'Organza Neckline Embroidered Patch'
    },
    originalPrice: 4850,
    discountedPrice: 3880,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 22,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Hand wash cold', 'Iron at cotton setting'],
    sku: 'NRE-COT-04'
  },

  // -------------------------------------------------------------
  // 5. KHADDAR SUITS (3 items)
  // -------------------------------------------------------------
  {
    id: 'khd-01',
    name: 'Dastoor Royal Khaddar Embroidered 3-Piece',
    brand: 'NOORÉ',
    category: 'Khaddar Suits',
    fabric: 'Khaddar',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Rust Orange & Navy',
    colorHex: '#BC6C25',
    description: 'Thick, warm hand-spun winter khaddar enriched with wool-thread Kashmiri embroidery on the front panel. Accompanied by a cozy printed warm khaddar shawl.',
    designDetails: {
      shirt: 'Heavy Khaddar Embroidered Front & Plain Back/Sleeves (3.0 Meters)',
      dupatta: 'Warm Printed Khaddar Shawl with tassels (2.5 Meters)',
      trouser: 'Dyed Khaddar Trouser (2.5 Meters)',
      embroidery: 'Thick wool thread Kashmiri stitch on front neckline'
    },
    unstitchedIncludes: {
      shirt: 'Embroidered Khaddar Shirt (3.0 Meters)',
      dupatta: 'Printed Khaddar Wool Shawl (2.5 Meters)',
      trouser: 'Dyed Winter Khaddar Trouser (2.5 Meters)'
    },
    originalPrice: 7200,
    discountedPrice: 5760,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 51,
    collection: 'Winter Khaddar',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean or gentle hand wash with wool detergent', 'Warm iron'],
    sku: 'NRE-KHD-01'
  },
  {
    id: 'khd-02',
    name: 'Rawayat Charcoal Printed Khaddar 3-Piece',
    brand: 'NOORÉ',
    category: 'Khaddar Suits',
    fabric: 'Khaddar',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Charcoal Grey',
    colorHex: '#333333',
    description: 'Classic winter charcoal khaddar featuring traditional ethnic block-print motifs paired with an exquisite warm twill shawl and dyed khaddar trousers.',
    designDetails: {
      shirt: 'Printed Heavy Khaddar Shirt (3.0 Meters)',
      dupatta: 'Warm Twill Khaddar Shawl (2.5 Meters)',
      trouser: 'Dyed Khaddar Trouser (2.5 Meters)',
      embroidery: 'Embroidered daman border patch'
    },
    unstitchedIncludes: {
      shirt: 'Printed Khaddar Fabric (3.0 Meters)',
      dupatta: 'Warm Winter Shawl (2.5 Meters)',
      trouser: 'Dyed Khaddar Fabric (2.5 Meters)'
    },
    originalPrice: 5800,
    discountedPrice: 4640,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 33,
    collection: 'Winter Khaddar',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Hand wash cold', 'Do not tumble dry'],
    sku: 'NRE-KHD-02'
  },
  {
    id: 'khd-03',
    name: 'Kohsar Olive Green 2-Piece Khaddar',
    brand: 'NOORÉ',
    category: '2-Piece Suits',
    fabric: 'Khaddar',
    suitType: 'Unstitched',
    pieces: '2-Piece',
    color: 'Olive Green',
    colorHex: '#556B2F',
    description: 'Deep forest olive winter khaddar suit featuring contemporary geometric prints. Comes with a matching printed khaddar shawl.',
    designDetails: {
      shirt: 'Printed Khaddar Shirt (3.0 Meters)',
      dupatta: 'Warm Printed Khaddar Shawl (2.5 Meters)',
      trouser: 'None (2-Piece Shirt & Shawl)',
      embroidery: 'Printed borders'
    },
    unstitchedIncludes: {
      shirt: 'Printed Khaddar Shirt (3.0 Meters)',
      dupatta: 'Printed Khaddar Shawl (2.5 Meters)',
      trouser: 'None'
    },
    originalPrice: 4400,
    discountedPrice: 3520,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 18,
    collection: 'Winter Khaddar',
    images: [
      'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Dry clean or gentle wash'],
    sku: 'NRE-KHD-03'
  },

  // -------------------------------------------------------------
  // 6. LUXURY FORMAL SUITS (3 items)
  // -------------------------------------------------------------
  {
    id: 'lux-01',
    name: 'Shehnai Heavily Embellished Organza Peshwas',
    brand: 'NOORÉ',
    category: 'Luxury Formal Suits',
    fabric: 'Organza',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Champagne Blush',
    colorHex: '#E9DFD1',
    description: 'An ethereal bridal & festive peshwas crafted on shimmering sheer organza. Embellished with resham threadwork, hand-set pearls, swarovski crystals, and micro-mirrors.',
    designDetails: {
      shirt: 'Heavily worked 16-kali organza flare with embellished bodice (4.5 Meters)',
      dupatta: 'Organza dupatta with heavy 4-side borders and spray jaal (2.75 Meters)',
      trouser: 'Raw Silk Churidar Trouser (2.5 Meters) + Silk Slip (2.5 Meters)',
      embroidery: 'Handmade zardozi, pearls, kora dabka and badla work'
    },
    unstitchedIncludes: {
      shirt: 'Organza Bodice & 16 Embroidered Kalis (4.5 Meters)',
      dupatta: 'Four-sided Embroidered Organza Dupatta (2.75 Meters)',
      trouser: 'Pure Raw Silk Fabric (2.5 Meters)',
      borders: 'Inner Cotton Silk Slip (2.5 Meters) & Pearl Lace'
    },
    originalPrice: 28500,
    discountedPrice: 24225,
    discountPercentage: 15,
    rating: 5.0,
    reviewsCount: 112,
    collection: 'Wedding Collection',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean only by luxury garment specialists', 'Store lying flat in garment box'],
    sku: 'NRE-LUX-01'
  },
  {
    id: 'lux-02',
    name: 'Zeb-un-Nisa Royal Maroon Raw Silk Ensemble',
    brand: 'NOORÉ',
    category: 'Wedding Collection',
    fabric: 'Raw Silk',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Imperial Maroon',
    colorHex: '#660708',
    description: 'Imperial deep maroon 80g raw silk canvas illuminated by traditional Mughal motifs in antique gold tilla, naqshi, and resham. Paired with a contrast tissue organza dupatta.',
    designDetails: {
      shirt: 'Pure Raw Silk Front, Back & Sleeves (3.0 Meters)',
      dupatta: 'Woven Tissue Organza Embroidered Dupatta (2.5 Meters)',
      trouser: 'Dyed Raw Silk Trouser with zardozi border (2.5 Meters)',
      embroidery: 'Zari, antique gold tilla and velvet applique'
    },
    unstitchedIncludes: {
      shirt: 'Raw Silk Shirt Fabric (3.0 Meters)',
      dupatta: 'Tissue Organza Dupatta (2.5 Meters)',
      trouser: 'Raw Silk Trouser (2.5 Meters)',
      borders: 'Velvet Applique Embroidered Border'
    },
    originalPrice: 26000,
    discountedPrice: 22100,
    discountPercentage: 15,
    rating: 4.9,
    reviewsCount: 78,
    collection: 'Wedding Collection',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean only', 'Keep away from moisture and fragrance sprays'],
    sku: 'NRE-LUX-02'
  },
  {
    id: 'lux-03',
    name: 'Afreen Plum Organza Formal Suit',
    brand: 'NOORÉ',
    category: 'Organza Suits',
    fabric: 'Organza',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Deep Plum Purple',
    colorHex: '#4A154B',
    description: 'Rich royal plum organza adorned with silver gota patti, kora, and cut-dana work. Includes a heavily embroidered organza dupatta with velvet finish borders.',
    designDetails: {
      shirt: 'Embroidered Sheer Organza Front, Back & Sleeves (3.0 Meters)',
      dupatta: 'Embroidered Organza Dupatta with velvet border (2.5 Meters)',
      trouser: 'Dyed Raw Silk Trouser (2.5 Meters)',
      embroidery: 'Silver gota, sequins and resham threadwork'
    },
    unstitchedIncludes: {
      shirt: 'Organza Embroidered Shirt (3.0 Meters)',
      dupatta: 'Embroidered Dupatta (2.5 Meters)',
      trouser: 'Raw Silk Trouser (2.5 Meters)',
      borders: 'Inner Cotton Silk Slip & Velvet Finish Border'
    },
    originalPrice: 22500,
    discountedPrice: 18000,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 54,
    collection: 'Luxury Formal',
    images: [
      'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: true,
    careInstructions: ['Professional dry clean only'],
    sku: 'NRE-LUX-03'
  },

  // -------------------------------------------------------------
  // 7. READY TO WEAR SUITS (2 items + 2 extra to make 32 total)
  // -------------------------------------------------------------
  {
    id: 'rtw-01',
    name: 'Mehr-un-Nisa Stitched Lawn Pret Kurta Set',
    brand: 'NOORÉ',
    category: 'Ready to Wear',
    fabric: 'Lawn',
    suitType: 'Ready to Wear',
    pieces: '2-Piece',
    color: 'Ivory & Gold',
    colorHex: '#FAF7F2',
    description: 'Tailored to perfection by master artisans. Classic straight A-line stitched lawn shirt featuring intricate threadwork along the band neckline and flared cuffs. Paired with straight cropped cigarette pants.',
    designDetails: {
      shirt: 'Stitched Luxury Lawn Kurta with organza insert detailing on sleeves and hem',
      dupatta: 'N/A (2-Piece Stitched Shirt & Pants)',
      trouser: 'Tailored Cotton Cigarette Pants with slit detail',
      embroidery: 'Delicate neck stitch, lace inserts and handcrafted cloth buttons'
    },
    originalPrice: 8500,
    discountedPrice: 6800,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 73,
    collection: 'Ready to Wear',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Hand wash or delicate machine wash', 'Medium steam iron'],
    sku: 'NRE-RTW-01'
  },
  {
    id: 'rtw-02',
    name: 'Bano Stitched Festive Chiffon 3-Piece',
    brand: 'NOORÉ',
    category: 'Ready to Wear',
    fabric: 'Chiffon',
    suitType: 'Ready to Wear',
    pieces: '3-Piece',
    color: 'Powder Teal',
    colorHex: '#006D77',
    description: 'A ready-to-wear luxury formal 3-piece suit. Featuring an Angrakha style stitched shirt with sequin embroidery, inner attached lining, matching crushed chiffon dupatta, and cigarette trousers.',
    designDetails: {
      shirt: 'Stitched Angrakha style flared chiffon shirt with attached lining',
      dupatta: 'Finished Crinkled Chiffon Dupatta with pearl borders',
      trouser: 'Stitched Raw Silk Trouser with elasticated waist',
      embroidery: 'Sequin, resham and golden tilla detailing'
    },
    originalPrice: 15500,
    discountedPrice: 12400,
    discountPercentage: 20,
    rating: 4.9,
    reviewsCount: 65,
    collection: 'Ready to Wear',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: ['Dry clean only', 'Do not bleach'],
    sku: 'NRE-RTW-02'
  },
  {
    id: 'rtw-03',
    name: 'Nazakat Stitched Raw Silk Kurta & Dupatta',
    brand: 'NOORÉ',
    category: 'Party Wear',
    fabric: 'Raw Silk',
    suitType: 'Ready to Wear',
    pieces: '2-Piece',
    color: 'Hot Pink & Gold',
    colorHex: '#D81159',
    description: 'Vibrant hot pink pure raw silk stitched kurta with boat neckline and hand-embellished gotta kinari accents. Finished with a gold tissue organza dupatta.',
    designDetails: {
      shirt: 'Stitched Straight Pure Raw Silk Kurti',
      dupatta: 'Gold Sheer Tissue Dupatta with scalloped borders',
      trouser: 'N/A (2-Piece Kurta & Dupatta)',
      embroidery: 'Traditional Pakistani gotta patti hand embellishment'
    },
    originalPrice: 11500,
    discountedPrice: 9200,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 42,
    collection: 'Ready to Wear',
    availableSizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Dry clean only', 'Iron inside out'],
    sku: 'NRE-RTW-03'
  },
  {
    id: 'camb-01',
    name: 'Sahil Cambric Cotton 3-Piece Daily Wear',
    brand: 'NOORÉ',
    category: 'Cambric Suits',
    fabric: 'Cambric',
    suitType: 'Unstitched',
    pieces: '3-Piece',
    color: 'Soft Beige & Brown',
    colorHex: '#E9DFD1',
    description: 'Crisp cambric cotton with timeless Pakistani block motifs in earthy dark brown and beige. Perfect for casual summer gatherings and office wear.',
    designDetails: {
      shirt: 'Printed Fine Cambric Cotton (3.0 Meters)',
      dupatta: 'Printed Cambric Cotton Dupatta (2.5 Meters)',
      trouser: 'Dyed Cambric Cotton Trouser (2.5 Meters)',
      embroidery: 'Printed geometric borders'
    },
    unstitchedIncludes: {
      shirt: 'Cambric Shirt Fabric (3.0 Meters)',
      dupatta: 'Cambric Dupatta (2.5 Meters)',
      trouser: 'Dyed Trouser (2.5 Meters)'
    },
    originalPrice: 4600,
    discountedPrice: 3680,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 34,
    collection: 'Summer Collection',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    careInstructions: ['Hand wash or machine wash gentle', 'Medium iron'],
    sku: 'NRE-CAM-01'
  }
];

export const CATEGORIES_LIST = [
  {
    id: 'unstitched-lawn',
    name: 'Unstitched Lawn Suits',
    slug: 'Unstitched Lawn Suits',
    count: 14,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    description: 'Pure 80s lawn fabric with artisan embroidery and Swiss voile dupattas.'
  },
  {
    id: 'printed-lawn',
    name: 'Printed Lawn Suits',
    slug: 'Printed Lawn Suits',
    count: 8,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    description: 'Vibrant digital prints, Mughal flora and contemporary geometrics.'
  },
  {
    id: 'embroidered-lawn',
    name: 'Embroidered Lawn Suits',
    slug: 'Embroidered Lawn Suits',
    count: 8,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
    description: 'Resham, schiffli chikankari and tilla threadwork on luxury lawn.'
  },
  {
    id: 'three-piece',
    name: '3-Piece Suits',
    slug: '3-Piece Suits',
    count: 24,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    description: 'Complete ensembles with shirt, dupatta, and matching trousers.'
  },
  {
    id: 'two-piece',
    name: '2-Piece Suits',
    slug: '2-Piece Suits',
    count: 8,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
    description: 'Versatile shirt & dupatta or shirt & trouser sets.'
  },
  {
    id: 'chiffon-suits',
    name: 'Chiffon Suits',
    slug: 'Chiffon Suits',
    count: 6,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
    description: 'Pure crinkle chiffon with zardozi, crystals, and delicate kiran lace.'
  },
  {
    id: 'organza-suits',
    name: 'Organza Suits',
    slug: 'Organza Suits',
    count: 4,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    description: 'Ethereal sheer silhouettes with scalloped borders and gota.'
  },
  {
    id: 'cotton-suits',
    name: 'Cotton Suits',
    slug: 'Cotton Suits',
    count: 5,
    image: 'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=700&q=80',
    description: 'Breathable combed cottons and shadow-stitch embroideries.'
  },
  {
    id: 'khaddar-suits',
    name: 'Khaddar Suits',
    slug: 'Khaddar Suits',
    count: 4,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
    description: 'Cozy winter khaddar with warm twill shawls.'
  },
  {
    id: 'cambric-suits',
    name: 'Cambric Suits',
    slug: 'Cambric Suits',
    count: 4,
    image: 'https://images.unsplash.com/photo-1610030469668-93510cb28665?auto=format&fit=crop&w=700&q=80',
    description: 'All-season smooth cambric cotton with subtle block prints.'
  },
  {
    id: 'luxury-formal',
    name: 'Luxury Formal Suits',
    slug: 'Luxury Formal Suits',
    count: 6,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    description: 'Couture handcrafted ensembles for weddings and evening soirees.'
  },
  {
    id: 'party-wear',
    name: 'Party Wear',
    slug: 'Party Wear',
    count: 7,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    description: 'Glimmering dabka, sequin jaals and festive silhouettes.'
  },
  {
    id: 'ready-to-wear',
    name: 'Ready to Wear',
    slug: 'Ready to Wear',
    count: 6,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    description: 'Masterfully stitched pret kurtas and ensembles ready to don.'
  },
  {
    id: 'wedding-collection',
    name: 'Wedding Collection',
    slug: 'Wedding Collection',
    count: 5,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
    description: 'Peshwas, shararas, and heavy dupattas for Pakistani nuptials.'
  },
  {
    id: 'festive-collection',
    name: 'Festive Collection',
    slug: 'Festive Collection',
    count: 8,
    image: 'https://images.unsplash.com/photo-1596783049597-280f55b93fb9?auto=format&fit=crop&w=700&q=80',
    description: 'Celebrate Eid and festivities in luxurious heritage palettes.'
  },
  {
    id: 'sale-collection',
    name: 'Sale Collection',
    slug: 'Sale Collection',
    count: 6,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
    description: 'Up to 30% off selected unstitched and pret favorites.'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Ayesha Khan',
    city: 'Lahore, Punjab',
    rating: 5,
    comment: 'The Zarmeen embroidered lawn suit exceeded all my expectations! The resham embroidery is so fine and clean, exactly like shown in the pictures. Delivery to Gulberg Lahore took only 2 days.',
    suitBought: 'Zarmeen Resham Embroidered Luxury Lawn',
    date: 'Verified Buyer • October 2026'
  },
  {
    id: 't-2',
    name: 'Fatima Zahra',
    city: 'Karachi, Sindh',
    rating: 5,
    comment: 'I ordered the Noor-ul-Ain Chiffon formal for my cousin\'s wedding at DHA Karachi. The quality of pure crinkle chiffon and the kiran lace on the dupatta gave me so many compliments!',
    suitBought: 'Noor-ul-Ain Pure Chiffon Luxury Formal',
    date: 'Verified Buyer • September 2026'
  },
  {
    id: 't-3',
    name: 'Dr. Mahnoor Tariq',
    city: 'Islamabad, F-7',
    rating: 5,
    comment: 'NOORÉ is now my go-to brand for unstitched lawn. The fabric breathability in Islamabad summer is unmatched. The colors don’t bleed and the cambric trouser quality is supreme.',
    suitBought: 'Gul-e-Rana Floral Printed Lawn',
    date: 'Verified Buyer • October 2026'
  },
  {
    id: 't-4',
    name: 'Zainab Bilour',
    city: 'Peshawar, KPK',
    rating: 5,
    comment: 'The ready-to-wear kurta fits like a dream! Size Medium was tailored exactly to the measurements on the size chart. Cash on delivery was seamless and the packaging was like receiving a luxury gift.',
    suitBought: 'Mehr-un-Nisa Stitched Lawn Pret Kurta Set',
    date: 'Verified Buyer • November 2026'
  }
];
