// Types
export interface Material {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  availableMaterials: Material[];
}

// Materials
export const materials: Material[] = [
  { 
    id: 'material-1', 
    name: 'Premium Paper (+$5)', 
    price: 5.00 
  },
  { 
    id: 'material-2', 
    name: 'Gold Trim (+$10)', 
    price: 10.00 
  },
  { 
    id: 'material-3', 
    name: 'Display Case (+$15)', 
    price: 15.00 
  },
  { 
    id: 'material-4', 
    name: 'LED Lighting (+$20)', 
    price: 20.00 
  }
];

// Sample products
export const products: Product[] = [
  {
    id: "gun-pistol",
    name: "Pistol",
    price: 24.99,
    shortDescription: "A miniature origami pistol with intricate details.",
    description: "This origami pistol is a unique blend of art and craftsmanship, showcasing the intricate details of a firearm in paper form. Each fold is meticulously crafted to create a realistic representation, making it a perfect conversation piece or collector's item.",
    images: [`${import.meta.env.BASE_URL}assets/products/Pistol.png`],
    availableMaterials: [
      { id: "white-paper", name: "White Premium Paper", price: 0 },
      { id: "gold-foil", name: "Gold Foil Accent", price: 5 },
      { id: "handmade-washi", name: "Handmade Washi Paper", price: 8 }
    ],
    inStock: true,
    category: "guns",
    featured: true
  },
  {
    id: "minimal-crane",
    name: "Minimal Crane",
    price: 24.99,
    shortDescription: "A timeless origami crane with a minimalist aesthetic.",
    description: "Handcrafted from premium origami paper, the Minimal Crane embodies elegance and simplicity. Perfect for modern interiors, it symbolizes peace and good fortune.",
    images: ['/assets/products/placeholder.svg'],
    availableMaterials: [
      { id: "white-paper", name: "White Premium Paper", price: 0 },
      { id: "gold-foil", name: "Gold Foil Accent", price: 5 },
      { id: "handmade-washi", name: "Handmade Washi Paper", price: 8 }
    ],
    inStock: true,
    category: "animals",
    featured: true
  },
  {
    id: 'geometric-polyhedron',
    name: 'Geometric Polyhedron',
    price: 49.99,
    shortDescription: 'A complex geometric form created through precise mathematical folds.',
    description: 'The Geometric Polyhedron is a testament to the mathematical precision possible with origami. This intricate piece features multiple interconnected faces forming a perfect polyhedron structure. The clean lines and sharp angles create fascinating light and shadow patterns as the ambient light changes throughout the day. Each fold is carefully calculated and executed, resulting in a perfectly balanced geometric sculpture. This piece works beautifully as a centerpiece or artistic focus in modern, minimalist spaces.',
    images: ['/assets/products/placeholder.svg'],
    category: 'geometric',
    featured: false,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[2], materials[3]]
  },
  {
    id: 'lotus-bloom',
    name: 'Lotus Bloom',
    price: 34.99,
    shortDescription: 'A delicate lotus flower captured in mid-bloom.',
    description: 'The Lotus Bloom captures the serene beauty of this iconic flower in its most captivating moment - just as the petals unfurl. Each petal is individually folded and assembled to create a realistic yet artistic interpretation of nature. The layered design creates depth and dimension, while the clean white paper allows for subtle shadows that enhance the piece\'s visual interest. The Lotus Bloom represents purity and enlightenment, making it a thoughtful gift or a meaningful addition to contemplative spaces.',
    images: ['/assets/products/placeholder.svg'],
    category: 'plants',
    featured: false,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[3]]
  },
  {
    id: 'abstract-wave',
    name: 'Abstract Wave',
    price: 59.99,
    shortDescription: 'A flowing sculpture capturing the essence of water in motion.',
    description: 'The Abstract Wave pushes the boundaries of traditional origami by creating fluid, organic curves that seem to defy the constraints of paper folding. This dynamic piece captures the essence of water in motion, frozen in a moment of perfect balance. Multiple curved elements interact to create a sense of movement and rhythm. The Abstract Wave demonstrates the potential of origami to express not just precise geometry, but also natural, flowing forms. This piece makes a striking conversation starter in contemporary spaces and pairs well with minimalist decor.',
    images: ['/assets/products/placeholder.svg'],
    category: 'abstract',
    featured: true,
    inStock: true,
    availableMaterials: [materials[0], materials[2]]
  },
  {
    id: 'architectural-pavilion',
    name: 'Architectural Pavilion',
    price: 69.99,
    shortDescription: 'A miniature architectural structure inspired by modern pavilion design.',
    description: 'The Architectural Pavilion represents the fascinating intersection of origami and architectural design. This complex piece features multiple interconnected elements that create a miniature structure resembling a modern pavilion. The precise folds create clean lines and sharp angles that highlight the mathematical precision of the design. The Architectural Pavilion plays with negative space as much as with form, creating interesting views from multiple angles. This sophisticated piece appeals to architecture enthusiasts and design lovers who appreciate the structural elegance possible with paper.',
    images: ['/assets/products/placeholder.svg'],
    category: 'geometric',
    featured: false,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[2]]
  },
  {
    id: 'minimal-fox',
    name: 'Minimal Fox',
    price: 44.99,
    shortDescription: 'A stylized fox design reduced to its essential geometric elements.',
    description: 'The Minimal Fox represents our design philosophy of reducing forms to their most essential elements while maintaining character and identity. This stylized fox captures the distinctive features of the animal - the pointed ears, the alert posture, the bushy tail - but renders them with clean, geometric precision. The result is both recognizable and abstract, playful yet sophisticated. The Minimal Fox makes a perfect desk companion or shelf accent, bringing a touch of nature-inspired design to your space without overwhelming minimalist aesthetics.',
    images: ['/assets/products/placeholder.svg'],
    category: 'animals',
    featured: false,
    inStock: true,
    availableMaterials: [materials[0], materials[2], materials[3]]
  },
  {
    id: 'bonsai-sculpture',
    name: 'Paper Bonsai',
    price: 79.99,
    shortDescription: 'A detailed miniature tree inspired by the art of bonsai.',
    description: 'The Paper Bonsai brings together the Japanese traditions of origami and bonsai to create a striking sculptural piece. This detailed miniature tree features an intricate trunk and branch structure supporting delicate foliage, all created through precise paper folding techniques. Unlike living bonsai, this artistic interpretation requires no maintenance while still capturing the essence of these revered miniature trees. The Paper Bonsai represents harmony, balance, and the beauty of nature. It makes an impressive centerpiece for any room and serves as a conversation starter about the intersection of different artistic traditions.',
    images: ['/assets/products/placeholder.svg'],
    category: 'plants',
    featured: true,
    inStock: true,
    availableMaterials: [materials[0], materials[2], materials[3]]
  },
  {
    id: 'minimal-elephant',
    name: 'Minimal Elephant',
    price: 54.99,
    shortDescription: 'A geometric interpretation of an elephant with clean, modern lines.',
    description: 'The Minimal Elephant captures the distinctive silhouette of this majestic animal using a series of geometric folds and planes. This design distills the elephant\'s most recognizable features—the trunk, ears, and sturdy form—into an abstract yet immediately identifiable sculpture. Each fold is precisely calculated to create a balanced composition that catches light and casts interesting shadows. The Minimal Elephant represents strength and wisdom in a contemporary artistic form. This piece makes a sophisticated addition to modern interiors, bringing a subtle animal motif that doesn\'t overwhelm clean design aesthetics.',
    images: ['/assets/products/placeholder.svg'],
    category: 'animals',
    featured: false,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[2]]
  }
];

// Helper functions
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};