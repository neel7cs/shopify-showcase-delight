
import { Product, ProductSummary } from "../types/Product";

export const product: Product = {
  id: "prod-001",
  name: "Premium Merino Wool Sweater",
  price: 129.99,
  originalPrice: 159.99,
  description: "Crafted from the finest merino wool, this premium sweater offers exceptional warmth without the weight. Perfect for layering in cold weather or wearing alone during mild temperatures. The timeless design ensures this piece will be a staple in your wardrobe for years to come.",
  features: [
    "100% premium merino wool",
    "Medium weight knit (320g)",
    "Naturally temperature regulating",
    "Odor resistant properties",
    "Moisture wicking technology",
    "Ribbed collar, cuffs, and hem",
    "Classic fit"
  ],
  material: "100% Merino Wool",
  careInstructions: "Hand wash cold with mild soap. Lay flat to dry. Do not bleach. Do not tumble dry. Cool iron if needed.",
  sku: "SW-MW-001",
  countryOfOrigin: "Made in Italy",
  sustainability: "Responsible Wool Standard (RWS) certified. This product is made from wool that comes from farms that practice sustainable agriculture and respect animal welfare.",
  images: [
    "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1638462922761-5967a67ffbcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  colors: [
    { name: "Charcoal", hex: "#36454F" },
    { name: "Navy", hex: "#1e3a8a" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Camel", hex: "#C19A6B" },
    { name: "Heather Gray", hex: "#B6B6B4" }
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  rating: 4.8,
  reviewCount: 247,
  isNew: true,
  isSale: true
};

export const relatedProducts: ProductSummary[] = [
  {
    id: "rel-001",
    name: "Cashmere Blend Cardigan",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear",
    badge: "Bestseller"
  },
  {
    id: "rel-002",
    name: "Cotton Crew Neck Sweater",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear"
  },
  {
    id: "rel-003",
    name: "Alpaca Turtleneck Sweater",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear",
    badge: "New"
  },
  {
    id: "rel-004",
    name: "Lambswool V-Neck Pullover",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear"
  }
];

export const pairsWellWith: ProductSummary[] = [
  {
    id: "pair-001",
    name: "Slim Fit Chino Pants",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Pants"
  },
  {
    id: "pair-002",
    name: "Leather Belt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: "pair-003",
    name: "Oxford Button-Down Shirt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shirts"
  },
  {
    id: "pair-004",
    name: "Suede Chelsea Boots",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Footwear"
  },
  {
    id: "pair-005",
    name: "Wool Blend Overcoat",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear"
  }
];

export const bundleProducts: ProductSummary[] = [
  {
    id: "bundle-001",
    name: "Premium Merino Wool Sweater",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear"
  },
  {
    id: "bundle-002",
    name: "Selvedge Denim Jeans",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Pants"
  },
  {
    id: "bundle-003",
    name: "Leather Derby Shoes",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1631234764568-996fab371596?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Footwear"
  }
];
