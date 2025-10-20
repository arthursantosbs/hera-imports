import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, Percent } from 'lucide-react';
import { getProducts } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = getProducts();
  const product = products.find(p => p.id === Number(id));
  const [mainImage, setMainImage] = useState<string | undefined>(product?.image);
  const isOutOfStock = product ? !product.inStock : false;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h2>
        <Link to="/produtos" className="text-purple-600 hover:underline">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/produtos" className="flex items-center text-gray-600 hover:text-primary mb-6">
            <ChevronLeft size={20} className="mr-1" />
            Voltar para todos os produtos
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagens do Produto */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={mainImage} alt={product.name} className="w-full h-auto max-h-[500px] object-contain rounded-lg mb-4" />
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Detalhes do Produto */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-sm text-primary font-medium bg-red-50 px-2 py-1 rounded-full mb-2 inline-block">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400">
                  {[...Array(Math.floor(product.rating))].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  {product.rating % 1 !== 0 && <Star size={20} fill="currentColor" className="opacity-50" />}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} de 5 estrelas</span>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-gray-900">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              {isOutOfStock ? (
                <div className="mb-6 space-y-3">
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700 font-semibold">
                    Produto esgotado no momento. Consulte nosso catálogo para novidades de reposição.
                  </div>
                  {product.restockPreview && (
                    <div className="rounded-lg border border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-amber-700">
                      <p className="text-sm font-semibold uppercase tracking-wide">Prévia de reposição</p>
                      <p className="text-sm">{product.restockPreview}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700 font-semibold">
                  Disponível para retirada com nossos parceiros. Verifique sabores antes da compra.
                </div>
              )}

              {/* Seleção de Sabor */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Selecione o Sabor:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.flavors.map((flavor: { name: string; stock: number }) => {
                    const flavorAvailable = flavor.stock > 0;
                    return (
                      <span
                        key={flavor.name}
                        className={`px-4 py-2 rounded-full border text-sm font-medium ${
                          flavorAvailable
                            ? 'border-primary/20 bg-red-50 text-primary'
                            : 'border-gray-200 bg-gray-100 text-gray-500'
                        }`}
                      >
                        {flavor.name} — {flavor.stock} un.
                      </span>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-600 flex items-center justify-center space-x-2">
                <Percent size={16} className="text-primary" />
                <span>Valores sujeitos à confirmação no ponto de venda parceiro.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Especificações do Produto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 py-2 flex justify-between">
                    <span className="font-semibold text-gray-600">{key}:</span>
                    <span className="text-gray-800">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;
