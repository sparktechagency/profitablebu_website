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
export const countryData = [
  {
    name: 'United States',
    code: 'US',
    flag: 'https://flagcdn.com/w20/us.png',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    flag: 'https://flagcdn.com/w20/gb.png',
  },
  {
    name: 'Canada',
    code: 'CA',
    flag: 'https://flagcdn.com/w20/ca.png',
  },
  {
    name: 'Australia',
    code: 'AU',
    flag: 'https://flagcdn.com/w20/au.png',
  },
  {
    name: 'Germany',
    code: 'DE',
    flag: 'https://flagcdn.com/w20/de.png',
  },
  {
    name: 'France',
    code: 'FR',
    flag: 'https://flagcdn.com/w20/fr.png',
  },
  {
    name: 'Italy',
    code: 'IT',
    flag: 'https://flagcdn.com/w20/it.png',
  },
  {
    name: 'Spain',
    code: 'ES',
    flag: 'https://flagcdn.com/w20/es.png',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    flag: 'https://flagcdn.com/w20/ae.png',
  },
  {
    name: 'India',
    code: 'IN',
    flag: 'https://flagcdn.com/w20/in.png',
  },
];
export const menuItems = {
  selling: [
    {
      name: 'Businesses for Sale',
      path: '/auth/login',
      state: 'sellerBusinesses',
    },
    {
      name: 'Business Assets for Sale',
      path: '/auth/login',
      state: 'sellerAssets',
    },
    {
      name: 'Business Ideas for Investors',
      path: '/auth/login',
      state: 'sellerIdeas',
    },
    {
      name: 'Franchises for Sale',
      path: '/auth/login',
      state: 'sellerFranchises',
    },
  ],
  buying: [
    {
      name: 'Buy a Business',
      path: '/auth/login',
      state: 'buyerBusiness',
    },
    {
      name: 'Buy a Business Asset',
      path: '/auth/login',
      state: 'buyerAsset',
    },
    {
      name: 'Buy a Franchise',
      path: '/auth/login',
      state: 'buyerFranchise',
    },
    {
      name: 'Contact Business Listers',
      path: '/auth/login',
      state: 'businessListers',
    },
  ],
  resources: [
    { name: 'FAQs', path: '/faqs', state: 'faqs' },
    { name: 'About Us', path: '/about-us', state: 'aboutUs' },
    { name: 'Contact Us', path: '/contact-us', state: 'contactUs' },
    { name: 'Privacy Policy', path: '/privacy-policy', state: 'privacyPolicy' },
    {
      name: 'Terms of Condition',
      path: '/terms-and-conditions',
      state: 'termsOfCondition',
    },
    {
      name: 'Refund and cancellation Policy',
      path: '/refund-and-cancellation-policy',
      state: 'refundAndCancellationPolicy',
    },
  ],

  valuation: [
    {
      name: 'Schedule a Call',
      path: '/valuation/call',
    },
    {
      name: 'Get Business Valuations',
      path: '/business-valuaion',
    },
  ],
};

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

export const location = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
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
    title: 'Powering Better Financial Solutions',
    location: 'Los Angeles, CA',
    category: 'Financial Services',
    subcategory: 'Business Consulting',
    price: 1000000000,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    businessType: 'Services',
    ownership: 'LLC',
    country: 'United States',
    reason: 'Powering Better Financial Solutions',
    hashtags: 'Financial Services',
    createdAt: '2025-06-23T04:40:33.060Z',
    updatedAt: '2025-06-23T04:40:33.060Z',
    sellerInfo: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      sellerType: 'Buyer',
    },
    description: `  
    <table width="100%" cellpadding="10" cellspacing="0">
        <tr>
            <td colspan="2">
                <p>Located in the heart of Banani, this cozy, fully-operational urban café is a favorite among young professionals, students, and tourists. The business boasts a strong brand identity, stylish interior, and a loyal customer base. The café is known for its handcrafted coffee, fresh bakery items, and comfortable ambiance perfect for casual meetings and co-working.</p>
            </td>
        </tr>
        
        <tr>
            <td colspan="2">
                <p><strong>Assets Included</strong></p>
                <ul>
                    <li>Licensed franchise brand rights (transferable)</li>
                    <li>Complete café setup (~1,200 sq. ft.)</li>
                    <li>Professional coffee & kitchen equipment</li>
                    <li>POS system</li>
                    <li>Decor and interior furnishings</li>
                    <li>10k+ social media followers</li>
                    <li>Staff and supplier contacts</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td colspan="2">
                <p><strong>Financial Summary (Approximate)</strong></p>
                <ul>
                    <li><strong>Monthly Revenue:</strong> $4,500</li>
                    <li><strong>Monthly Expenses:</strong> $2,000</li>
                    <li><strong>Net Profit:</strong> $2,500</li>
                    <li><strong>Inventory Value:</strong> $2,000</li>
                    <li><strong>Lease Terms:</strong> 3 years remaining, renewable</li>
                    <li><strong>Royalty Fee:</strong> 5% of monthly revenue</li>
                </ul>
            </td>
        </tr>
    </table>
    `,
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
    reason: 'Powering Better Financial Solutions',
    hashtags: 'Financial Services',
    description: 'Powering Better Financial Solutions',
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
    reason: 'Powering Better Financial Solutions',
    hashtags: 'Financial Services',
    description: 'Powering Better Financial Solutions',
  },
];
