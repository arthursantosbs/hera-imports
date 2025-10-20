
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Eye, Star} from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  description: string
  inStock: boolean
  restockPreview?: string
  flavors: { name: string; stock: number }[]
}

interface ProductCardProps {
  product: Product
  index: number
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0
  const isOutOfStock = !product.inStock

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </div>
        )}

        {isOutOfStock && (
          <div className="absolute inset-x-0 bottom-0 bg-red-600/90 text-white text-xs font-semibold uppercase tracking-wide py-2 text-center">
            Esgotado
          </div>
        )}
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/produtos/${product.id}`}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <Eye className="h-5 w-5 text-gray-700" />
          </Link>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary font-medium bg-red-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {isOutOfStock && (
          <div className="mb-4 space-y-1">
            <p className="text-sm font-semibold text-red-600">Produto esgotado no momento</p>
            {product.restockPreview && (
              <p className="text-xs text-gray-500 bg-gray-100 border border-dashed border-gray-300 rounded-md px-3 py-2">
                Prévia de reposição: <span className="font-semibold text-gray-700">{product.restockPreview}</span>
              </p>
            )}
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-wide text-gray-500 mb-1">Sabores</h4>
          <div className="flex flex-wrap gap-2">
            {product.flavors.map((flavor) => {
              const flavorAvailable = flavor.stock > 0
              return (
                <span
                  key={flavor.name}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    flavorAvailable ? 'bg-red-50 text-primary' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {flavor.name}
                  {!flavorAvailable && ' (0)' }
                </span>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isOutOfStock ? 'text-gray-400' : 'text-gray-900'}`}>
              R$ {product.price.toLocaleString('pt-BR')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toLocaleString('pt-BR')}
              </span>
            )}
          </div>
          
          <Link
            to={`/produtos/${product.id}`}
            className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
