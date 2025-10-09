import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product } from '../types';

interface FlavorModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, flavor: string) => void;
}

const FlavorModal: React.FC<FlavorModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedFlavor, setSelectedFlavor] = React.useState<string>('');

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    if (selectedFlavor) {
      onAddToCart(product, selectedFlavor);
      onClose();
    } else {
      alert('Por favor, selecione um sabor.');
    }
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Selecione o Sabor:</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor.name}
                    onClick={() => setSelectedFlavor(flavor.name)}
                    className={`px-4 py-2 rounded-full border-2 ${
                      selectedFlavor === flavor.name
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-gray-100 text-gray-800 border-gray-300'
                    } transition-colors`}
                  >
                    {flavor.name} ({flavor.stock} disp.)
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!selectedFlavor}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlavorModal;
