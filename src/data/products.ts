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
  difficulty: 'beginner' | 'intermediate' | 'expert';
}

// Materials
export const materials: Material[] = [
  { 
    id: 'material-1', 
    name: 'Carton Paper (+$5)', 
    price: 5.00 
  },
  { 
    id: 'material-2', 
    name: 'Cutter (+$10)', 
    price: 10.00 
  },
  { 
    id: 'material-3', 
    name: 'Bone Folder (+$15)', 
    price: 15.00 
  },
  { 
    id: 'material-4', 
    name: 'Glue (+$20)', 
    price: 20.00 
  },
  { 
    id: 'material-5', 
    name: 'Adhesive Glue (+$20)', 
    price: 20.00 
  },
  { 
    id: 'material-6', 
    name: 'Scissors (+$20)', 
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
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    inStock: true,
    category: "guns",
    featured: true,
    difficulty: "beginner"
  },
  {
    id: "gun-ak-47",
    name: "Ak-47",
    price: 24.99,
    shortDescription: "A detailed origami representation of the iconic AK-47 rifle.",
    description: "The Ak-47 origami piece captures the essence of this iconic firearm with precision and artistry. Each fold is designed to reflect the unique features of the AK-47, from its distinctive shape to its intricate details. This piece serves as a striking representation of both art and weaponry, appealing to collectors and enthusiasts alike.",
    images: [`${import.meta.env.BASE_URL}assets/products/Ak.png`],
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    inStock: true,
    category: "guns",
    featured: true,
    difficulty: "intermediate"
  },
  {
    id: 'sniper-rifle',
    name: 'Sniper Rifle',
    price: 49.99,
    shortDescription: 'A precision-crafted origami sniper rifle with intricate details.',
    description: 'The Sniper Rifle is a testament to the art of origami, showcasing the delicate balance between complexity and elegance. This piece features multiple moving parts, including a folding bipod and an adjustable scope, all crafted from high-quality paper. The attention to detail in the folds and creases creates a realistic representation of a sniper rifle, making it a perfect addition for collectors or as a unique gift for enthusiasts of military history and weaponry.',
    images: [`${import.meta.env.BASE_URL}assets/products/Sniper.png`],
    category: 'guns',
    featured: true,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "expert"
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
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "beginner"
  },
  {
    id: 'abstract-wave',
    name: 'Abstract Wave',
    price: 59.99,
    shortDescription: 'A flowing sculpture capturing the essence of water in motion.',
    description: 'The Abstract Wave pushes the boundaries of traditional origami by creating fluid, organic curves that seem to defy the constraints of paper folding. This dynamic piece captures the essence of water in motion, frozen in a moment of perfect balance. Multiple curved elements interact to create a sense of movement and rhythm. The Abstract Wave demonstrates the potential of origami to express not just precise geometry, but also natural, flowing forms. This piece makes a striking conversation starter in contemporary spaces and pairs well with minimalist decor.',
    images: ['/assets/products/placeholder.svg'],
    category: 'abstract',
    featured: false,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "expert"
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
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "intermediate"
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
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "beginner"
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
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "intermediate"
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
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "expert"
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