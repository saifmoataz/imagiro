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
    price: 6.99,
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
    price: 7.99,
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
    price: 9.99,
    shortDescription: 'A precision-crafted origami sniper rifle with intricate details.',
    description: 'The Sniper Rifle is a testament to the art of origami, showcasing the delicate balance between complexity and elegance. This piece features multiple moving parts, including a folding bipod and an adjustable scope, all crafted from high-quality paper. The attention to detail in the folds and creases creates a realistic representation of a sniper rifle, making it a perfect addition for collectors or as a unique gift for enthusiasts of military history and weaponry.',
    images: [`${import.meta.env.BASE_URL}assets/products/Sniper.png`],
    category: 'guns',
    featured: true,
    inStock: true,
    availableMaterials: [materials[0], materials[1], materials[2], materials[3], materials[4], materials[5]],
    difficulty: "expert"
  },
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