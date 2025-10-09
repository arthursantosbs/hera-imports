import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, flavor: string) => void;
  removeFromCart: (cartItemId: string) => void;
  incrementQuantity: (cartItemId: string) => void;
  decrementQuantity: (cartItemId: string) => void;
  clearCart: () => void;
}

// Helper para criar um ID único para o item do carrinho baseado no ID do produto e no sabor
const getCartItemId = (product: { id: number; flavor: string }) => 
  `${product.id}-${product.flavor}`;

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product, flavor) =>
    set((state) => {
      const cartItemId = getCartItemId({ id: product.id, flavor });
      const existingProduct = state.cart.find((p) => p.cartItemId === cartItemId);

      if (existingProduct) {
        // Se o produto com o mesmo sabor já existe, apenas incrementa a quantidade
        return {
          cart: state.cart.map((p) =>
            p.cartItemId === cartItemId ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      // Adiciona o novo produto (com sabor) ao carrinho
      const newItem: CartItem = {
        ...product,
        flavor,
        quantity: 1,
        cartItemId,
      };
      return { cart: [...state.cart, newItem] };
    }),
  removeFromCart: (cartItemId) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.cartItemId !== cartItemId),
    })),
  incrementQuantity: (cartItemId) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.cartItemId === cartItemId ? { ...p, quantity: p.quantity + 1 } : p
      ),
    })),
  decrementQuantity: (cartItemId) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.cartItemId === cartItemId && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      ),
    })),
  clearCart: () => set({ cart: [] }),
}));
