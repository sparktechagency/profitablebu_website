export const categories = [
  'Restaurant',
  'Retail',
  'E-commerce',
  'Franchise',
  'Services',
  'Manufacturing',
  'Health & Beauty',
  'Education',
  'Automotive',
  'Other',
];

export const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'United Arab Emirates',
  'India',
];

export const priceRanges = [
  { label: 'Under $50K', value: [0, 50000] },
  { label: '$50K - $100K', value: [50000, 100000] },
  { label: '$100K - $250K', value: [100000, 250000] },
  { label: '$250K - $500K', value: [250000, 500000] },
  { label: '$500K - $1M', value: [500000, 1000000] },
  { label: 'Over $1M', value: [1000000, Infinity] },
];

export const businessTypes = [
  'Franchise',
  'Independent',
  'Startup',
  'Home-Based',
  'Online',
];

export const ownershipTypes = [
  'Sole Proprietorship',
  'Partnership',
  'Corporation',
  'LLC',
];

export const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Price (Low to High)', value: 'priceLow' },
  { label: 'Most Viewed', value: 'viewed' },
];
export const ageOfListingOptions = [
  { label: 'Anytime', value: 'anytime' },
  { label: 'Last 3 Days', value: 'last3Days' },
  { label: 'Last 14 Days', value: 'last14Days' },
  { label: 'Last Month', value: 'lastMonth' },
  { label: 'Last 3 Months', value: 'last3Months' },
];
export const businessData = [
  {
    id: 1,
    title: 'Trendy Urban Café in Dhaka City',
    location: 'Banani, Dhaka, Bangladesh',
    category: 'Food & Beverage',
    subcategory: 'Café & Coffee Shop',
    price: 175000, // Price in USD
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg', // Replace with actual image URL
    businessType: 'Franchise Resale',
    ownership: 'Sole Proprietorship',
    country: 'Bangladesh',
    assetsIncluded: [
      'Licensed franchise brand rights',
      'Complete café setup (1,420 sq ft)',
      'Professional coffee & kitchen equipment',
      'POS system',
      'Décor and interior furnishings',
      'Deed and lease agreement',
      'Social media followers',
      'Staff and supplier contracts',
    ],
    financialSummary: {
      monthlyRevenue: 44500, // Monthly revenue in USD
      netProfit: 5250, // Monthly net profit in USD
      inventoryValue: 20000, // Inventory value in USD
      leaseTerms: '5 years remaining, renewable',
      royaltyFee: '5% of monthly revenue',
    },
    reasonForSelling: 'Owner relocating abroad',
    saleEvent: {
      date: '15th February 2025',
      time: '10:00 AM - 4:00 PM',
      location:
        'Conference Hall 3, Tech/Phone Tower, 789 Silicon Avenue, San Francisco',
    },
    contact: {
      hostName: 'Sardor',
      email: 'sardor@gmail.com',
    },
  },
  {
    id: 2,
    title: 'Organic Grocery Store in New York',
    location: 'New York, NY, United States',
    category: 'Retail',
    subcategory: 'Grocery Store',
    price: 95000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'LLC',
    country: 'United States',
    assetsIncluded: [
      'Brand rights',
      'Store setup (1,000 sq ft)',
      'POS system',
      'Stock inventory',
      'Supplier contracts',
      'Refrigeration and storage equipment',
    ],
    financialSummary: {
      monthlyRevenue: 35000,
      netProfit: 4000,
      inventoryValue: 15000,
      leaseTerms: '4 years remaining, renewable',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Moving to another city',
    saleEvent: {
      date: '20th March 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'New York Convention Center, 123 Park Ave, New York',
    },
    contact: {
      hostName: 'John Doe',
      email: 'johndoe@gmail.com',
    },
  },
  {
    id: 3,
    title: 'Luxury Spa Business for Sale',
    location: 'Los Angeles, CA, United States',
    category: 'Health & Wellness',
    subcategory: 'Spa & Wellness Center',
    price: 250000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Franchise Resale',
    ownership: 'Sole Proprietorship',
    country: 'United States',
    assetsIncluded: [
      'Franchise rights',
      'Spa setup (2,000 sq ft)',
      'Luxury spa equipment',
      'POS system',
      'Staff and supplier contracts',
    ],
    financialSummary: {
      monthlyRevenue: 60000,
      netProfit: 8000,
      inventoryValue: 30000,
      leaseTerms: '3 years remaining, renewable',
      royaltyFee: '7% of monthly revenue',
    },
    reasonForSelling: 'Owner moving abroad',
    saleEvent: {
      date: '25th April 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'LA Convention Center, 123 Main St, Los Angeles',
    },
    contact: {
      hostName: 'Jane Smith',
      email: 'janesmith@gmail.com',
    },
  },
  {
    id: 4,
    title: 'Fitness Studio in Miami',
    location: 'Miami, FL, United States',
    category: 'Health & Wellness',
    subcategory: 'Fitness & Gym',
    price: 120000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'Sole Proprietorship',
    country: 'United States',
    assetsIncluded: [
      'Gym equipment',
      'Licensed fitness programs',
      'Staff contracts',
      'Brand rights',
      'POS system',
      'Refrigeration and refreshments',
    ],
    financialSummary: {
      monthlyRevenue: 40000,
      netProfit: 5000,
      inventoryValue: 15000,
      leaseTerms: '5 years remaining',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Health issues',
    saleEvent: {
      date: '10th March 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Miami Fitness Expo, 456 Ocean Drive, Miami',
    },
    contact: {
      hostName: 'Robert Brown',
      email: 'robertbrown@gmail.com',
    },
  },
  {
    id: 5,
    title: 'Pet Grooming Business for Sale',
    location: 'San Francisco, CA, United States',
    category: 'Pet Services',
    subcategory: 'Grooming & Care',
    price: 60000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'LLC',
    country: 'United States',
    assetsIncluded: [
      'Grooming equipment',
      'Pet care services',
      'POS system',
      'Brand rights',
    ],
    financialSummary: {
      monthlyRevenue: 20000,
      netProfit: 3000,
      inventoryValue: 8000,
      leaseTerms: '2 years remaining, renewable',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Relocating',
    saleEvent: {
      date: '5th April 2025',
      time: '10:00 AM - 3:00 PM',
      location: 'San Francisco Convention Center, 789 Market St, San Francisco',
    },
    contact: {
      hostName: 'Linda Green',
      email: 'lindagreen@gmail.com',
    },
  },
  {
    id: 6,
    title: 'Mobile Car Wash Business for Sale',
    location: 'Houston, TX, United States',
    category: 'Services',
    subcategory: 'Mobile & Cleaning',
    price: 35000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'Sole Proprietorship',
    country: 'United States',
    assetsIncluded: [
      'Mobile car wash units',
      'Cleaning supplies',
      'Brand rights',
      'Contracts with local businesses',
    ],
    financialSummary: {
      monthlyRevenue: 15000,
      netProfit: 2000,
      inventoryValue: 5000,
      leaseTerms: 'No lease, mobile-based business',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Owner relocation',
    saleEvent: {
      date: '10th May 2025',
      time: '9:00 AM - 2:00 PM',
      location: 'Houston Business Expo, 123 Downtown Blvd, Houston',
    },
    contact: {
      hostName: 'Mark White',
      email: 'markwhite@gmail.com',
    },
  },
  {
    id: 7,
    title: 'Restaurant Business for Sale',
    location: 'Chicago, IL, United States',
    category: 'Food & Beverage',
    subcategory: 'Restaurant',
    price: 200000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'Sole Proprietorship',
    country: 'United States',
    assetsIncluded: [
      'Restaurant setup (3,000 sq ft)',
      'Kitchen equipment',
      'Staff contracts',
      'Brand rights',
      'POS system',
    ],
    financialSummary: {
      monthlyRevenue: 70000,
      netProfit: 10000,
      inventoryValue: 25000,
      leaseTerms: '3 years remaining, renewable',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Owner moving to another state',
    saleEvent: {
      date: '30th June 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Chicago Business Expo, 800 W Madison St, Chicago',
    },
    contact: {
      hostName: 'Chris Black',
      email: 'chrisblack@gmail.com',
    },
  },
  {
    id: 8,
    title: 'Beauty Salon for Sale',
    location: 'Dallas, TX, United States',
    category: 'Health & Wellness',
    subcategory: 'Beauty & Salon',
    price: 150000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Franchise Resale',
    ownership: 'LLC',
    country: 'United States',
    assetsIncluded: [
      'Franchise rights',
      'Beauty equipment',
      'POS system',
      'Brand rights',
      'Staff contracts',
    ],
    financialSummary: {
      monthlyRevenue: 50000,
      netProfit: 7000,
      inventoryValue: 15000,
      leaseTerms: '2 years remaining, renewable',
      royaltyFee: '6% of monthly revenue',
    },
    reasonForSelling: 'Moving abroad',
    saleEvent: {
      date: '18th July 2025',
      time: '10:00 AM - 5:00 PM',
      location: 'Dallas Beauty Expo, 1000 Elm St, Dallas',
    },
    contact: {
      hostName: 'Sophia Martinez',
      email: 'sophiamartinez@gmail.com',
    },
  },
  {
    id: 9,
    title: 'Tech Startup for Sale',
    location: 'Seattle, WA, United States',
    category: 'Technology',
    subcategory: 'Software & Development',
    price: 300000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'LLC',
    country: 'United States',
    assetsIncluded: [
      'Software products',
      'Development team contracts',
      'Brand rights',
      'Customer database',
    ],
    financialSummary: {
      monthlyRevenue: 80000,
      netProfit: 15000,
      inventoryValue: 10000,
      leaseTerms: 'No lease, fully online business',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Pursuing a new business venture',
    saleEvent: {
      date: '20th August 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Seattle Business Expo, 123 Tech Park, Seattle',
    },
    contact: {
      hostName: 'Adam Johnson',
      email: 'adamjohnson@gmail.com',
    },
  },
  {
    id: 10,
    title: 'Cleaning Service Business for Sale',
    location: 'Atlanta, GA, United States',
    category: 'Services',
    subcategory: 'Cleaning Services',
    price: 40000,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg',
    businessType: 'Independent',
    ownership: 'Sole Proprietorship',
    country: 'United States',
    assetsIncluded: [
      'Cleaning equipment',
      'Contracts with local businesses',
      'Brand rights',
      'POS system',
    ],
    financialSummary: {
      monthlyRevenue: 25000,
      netProfit: 4000,
      inventoryValue: 10000,
      leaseTerms: 'No lease, mobile-based business',
      royaltyFee: 'None',
    },
    reasonForSelling: 'Health issues',
    saleEvent: {
      date: '10th September 2025',
      time: '10:00 AM - 3:00 PM',
      location: 'Atlanta Business Expo, 456 Peachtree St, Atlanta',
    },
    contact: {
      hostName: 'Nancy Lee',
      email: 'nancylee@gmail.com',
    },
  },
];
