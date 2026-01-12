import { Product } from "@/contexts/CartContext";

export const allProducts: Product[] = [
  // Featured Products
  {
    id: "scraper-mini",
    title: "Achedaway Mini Scraper",
    subtitle: "On-the-Go Heated Muscle Scraping Tool",
    price: 149.99,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F4c583a3ee0a4493eb5e6fca0dada86fa?format=webp&width=800",
    category: "equipment",
    featured: true,
    sizes: ["One Achedaway Mini Scraper", "Two Achedaway Mini Scrapers", "Achedaway Large Scraper + Mini Scraper Bundle"],
    description: "Achedaway Mini Scraper - On-the-Go Heated Muscle Scraping Tool. Perfect for Targeting Small Muscle Groups",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F4c583a3ee0a4493eb5e6fca0dada86fa?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F734e8330d9cc42508b5ee654fbdff32e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F8885cdd5410b4e91b34002f2e031f1cd?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F938adb9653a540638dadbcd1df1a099b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2Fe1bab8fcde944507a9347b09780adcf8?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2Ff67ddd22cb2b4ce696ae75809966fb6b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F8c8131b6b38e438789061aa1c319de5d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2Fbd2db2bf76dc466fa0ee7e5d644defec%2F8e813a9f411740bfbfe2b75b4a5aa3de?format=webp&width=800",
    ],
  },
  
  // Apparel - Women
  {
    id: "womens-tank-1",
    title: "Balance Performance Tank",
    subtitle: "Women's Athletic Training Top",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
    category: "womens",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Yellow", "White"],
  },
  {
    id: "womens-leggings-1",
    title: "Elite Training Leggings",
    subtitle: "High-Waisted Compression Fit",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1000&fit=crop",
    category: "womens",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
  },
  {
    id: "womens-hoodie-1",
    title: "Guru Signature Hoodie",
    subtitle: "Women's Premium Fleece",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop",
    category: "womens",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Yellow"],
  },
  
  // Apparel - Men
  {
    id: "mens-tee-1",
    title: "Master Balance Tee",
    subtitle: "Men's Performance T-Shirt",
    price: 40.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
    category: "mens",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Yellow", "Gray"],
  },
  {
    id: "mens-shorts-1",
    title: "Training Pro Shorts",
    subtitle: "Athletic Performance Shorts",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=1000&fit=crop",
    category: "mens",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy"],
  },
  {
    id: "mens-hoodie-1",
    title: "Balance Guru Hoodie",
    subtitle: "Men's Premium Pullover",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop",
    category: "mens",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Yellow"],
  },
  
  // Equipment
  {
    id: "balance-board-1",
    title: "Pro Balance Board",
    subtitle: "Professional Training Equipment",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop",
    category: "equipment",
    featured: true,
  },
  {
    id: "resistance-bands",
    title: "Elite Resistance Band Set",
    subtitle: "5-Level Resistance Training Kit",
    price: 49.00,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&h=1000&fit=crop",
    category: "equipment",
  },
  {
    id: "yoga-mat",
    title: "Premium Training Mat",
    subtitle: "Extra-Thick Non-Slip Surface",
    price: 79.00,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=1000&fit=crop",
    category: "equipment",
  },
  
  // Accessories
  {
    id: "water-bottle",
    title: "Hydration Bottle",
    subtitle: "32oz Insulated Steel Bottle",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=1000&fit=crop",
    category: "accessories",
  },
  {
    id: "gym-bag",
    title: "Balance Guru Gym Bag",
    subtitle: "Premium Training Duffel",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop",
    category: "accessories",
  },
  {
    id: "wristbands",
    title: "Performance Wristbands",
    subtitle: "Sweat-Absorbing Athletic Bands",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
    category: "accessories",
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "equipment", label: "Equipment" },
  { id: "mens", label: "Men's" },
  { id: "womens", label: "Women's" },
  { id: "accessories", label: "Accessories" },
];
