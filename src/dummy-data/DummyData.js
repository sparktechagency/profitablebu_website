export  const categories = [
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

export  const countries = [
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

export  const priceRanges = [
    { label: 'Under $50K', value: [0, 50000] },
    { label: '$50K - $100K', value: [50000, 100000] },
    { label: '$100K - $250K', value: [100000, 250000] },
    { label: '$250K - $500K', value: [250000, 500000] },
    { label: '$500K - $1M', value: [500000, 1000000] },
    { label: 'Over $1M', value: [1000000, Infinity] },
  ];

export  const businessTypes = [
    'Franchise',
    'Independent',
    'Startup',
    'Home-Based',
    'Online',
  ];

export  const ownershipTypes = [
    'Sole Proprietorship',
    'Partnership',
    'Corporation',
    'LLC',
  ];

export  const sortOptions = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Price (Low to High)', value: 'priceLow' },
    { label: 'Most Viewed', value: 'viewed' },
  ];

export const businessData = [
  {
    id: 1,
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'LLC',
    country: 'United States',
  },
  {
    id: 2,
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'Corporation',
    country: 'United States',
  },
  {
    id: 3,
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'Partnership',
    country: 'United States',
  },
];
