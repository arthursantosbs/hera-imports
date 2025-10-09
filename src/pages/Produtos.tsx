
import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {Search, Filter, ShoppingCart, Star, Eye, Heart} from 'lucide-react'

import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('name')
  const addToCart = useCartStore((state) => state.addToCart);

  const products = [
    {
      id: 1,
      name: 'Pod System Caliburn G2',
      price: 89.90,
      originalPrice: 119.90,
      image: 'https://images.pexels.com/photos/7262740/pexels-photo-7262740.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Pod System',
      rating: 4.8,
      description: 'Pod system premium com excelente qualidade de vapor e sabor.',
      inStock: true
    },
    {
      id: 2,
      name: 'Juice Naked 100 - 60ml',
      price: 45.90,
      originalPrice: 59.90,
      image: 'https://images.pexels.com/photos/7262741/pexels-photo-7262741.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-Liquid',
      rating: 4.9,
      description: 'E-liquid premium com sabores intensos e duradouros.',
      inStock: true
    },
    {
      id: 3,
      name: 'Vape Pen 22',
      price: 129.90,
      originalPrice: 159.90,
      image: 'https://images.pexels.com/photos/7262742/pexels-photo-7262742.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Vape Pen',
      rating: 4.7,
      description: 'Vape pen elegante e potente para uma experiência superior.',
      inStock: true
    },
    {
      id: 4,
      name: 'Pod Descartável Elf Bar',
      price: 29.90,
      originalPrice: 39.90,
      image: 'https://images.pexels.com/photos/7262743/pexels-photo-7262743.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Descartável',
      rating: 4.6,
      description: 'Pod descartável prático com sabores variados.',
      inStock: true
    },
    {
      id: 5,
      name: 'Mod Box Zeus X',
      price: 199.90,
      originalPrice: 249.90,
      image: 'https://images.pexels.com/photos/7262744/pexels-photo-7262744.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mod',
      rating: 4.9,
      description: 'Mod box profissional com controle de potência avançado.',
      inStock: false
    },
    {
      id: 6,
      name: 'Coil Mesh 0.15ohm',
      price: 15.90,
      originalPrice: 19.90,
      image: 'https://images.pexels.com/photos/7262745/pexels-photo-7262745.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Acessórios',
      rating: 4.5,
      description: 'Coil de reposição com tecnologia mesh para melhor sabor.',
      inStock: true
    }
  ]

  const categories = ['Todos', 'Pod System', 'E-Liquid', 'Vape Pen', 'Descartável', 'Mod', 'Acessórios']

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [searchTerm, selectedCategory, sortBy])

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos Produtos
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Descubra nossa seleção completa de pods, vapes e acessórios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white shadow-sm border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Filtro por Categoria */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ordenação */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="name">Ordenar por Nome</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="rating">Melhor Avaliação</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg text-gray-600">
              {filteredAndSortedProducts.length} produto{filteredAndSortedProducts.length !== 1 ? 's' : ''} encontrado{filteredAndSortedProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'Todos' && ` na categoria "${selectedCategory}"`}
            </p>
          </motion.div>

          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
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
                    
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                        -{discount(product.originalPrice, product.price)}%
                      </div>
                    )}
                    
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                          Esgotado
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2">
                      <Link to={`/produtos/${product.id}`} className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Eye className="h-5 w-5 text-gray-700" />
                      </Link>
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Heart className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      disabled={!product.inStock}
                      onClick={() => {
                        if (product.inStock) {
                          addToCart({ ...product, quantity: 1 });
                        }
                      }}
                      className={`w-full py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                        product.inStock
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou termos de busca
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Produtos
