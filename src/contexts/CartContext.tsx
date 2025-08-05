import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { getProductById } from '@/data/products';

export interface MaterialOption {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

export interface CartItem {
  id: string; // Unique identifier for cart item
  productId: string; // Reference to the product
  name: string;
  price: number;
  quantity: number;
  image?: string;
  materials: MaterialOption[];
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  toggleMaterial: (itemId: string, materialId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('imagiro-cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error parsing cart data from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('imagiro-cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    // Base price for this item
    let itemTotal = item.price * item.quantity;
    
    // Add cost of selected materials
    item.materials.forEach(material => {
      if (material.selected) {
        itemTotal += material.price * item.quantity;
      }
    });
    
    return total + itemTotal;
  }, 0);

  // Add item to cart
  const addToCart = (newItem: CartItem) => {
    setCart(prevCart => {
      // Check if the same product with the same selected materials exists
      const existingItemIndex = prevCart.findIndex(item => {
        if (item.productId !== newItem.productId) return false;
        
        // Compare selected materials
        const newMaterials = newItem.materials.filter(m => m.selected).map(m => m.id).sort();
        const existingMaterials = item.materials.filter(m => m.selected).map(m => m.id).sort();
        
        // Check if the selected materials are the same
        if (newMaterials.length !== existingMaterials.length) return false;
        
        return newMaterials.every((id, index) => id === existingMaterials[index]);
      });

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += newItem.quantity;
        
        toast({
          title: "Item added to cart",
          description: `${newItem.name} quantity updated to ${updatedCart[existingItemIndex].quantity}`,
        });
        
        return updatedCart;
      } else {
        // Add new item
        toast({
          title: "Item added to cart",
          description: `${newItem.name} added to your cart`,
        });
        
        return [...prevCart, newItem];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  // Update item quantity
  const updateQuantity = (itemId: string, quantity: number) => {
    setCart(prevCart => {
      if (quantity <= 0) {
        return prevCart.filter(item => item.id !== itemId);
      }
      
      return prevCart.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  };

  // Toggle material selection
  const toggleMaterial = (itemId: string, materialId: string) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id !== itemId) return item;
        
        // Toggle the selected state of the specified material
        const updatedMaterials = item.materials.map(material => 
          material.id === materialId
            ? { ...material, selected: !material.selected }
            : material
        );
        
        return { ...item, materials: updatedMaterials };
      })
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "Your cart has been cleared",
    });
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        toggleMaterial,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};