
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {ShoppingCart, Truck, Shield, CreditCard, ArrowRight, CheckCircle, Users, Award, Zap} from 'lucide-react'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Pod System Caliburn G2',
      price: 'R$ 89,90',
      originalPrice: 'R$ 119,90',
      image: 'https://images.pexels.com/photos/7262740/pexels-photo-7262740.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Pod System'
    },
    {
      id: 2,
      name: 'Juice Naked 100 - 60ml',
      price: 'R$ 45,90',
      originalPrice: 'R$ 59,90',
      image: 'https://images.pexels.com/photos/7262741/pexels-photo-7262741.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-Liquid'
    },
    {
      id: 3,
      name: 'Vape Pen 22',
      price: 'R$ 129,90',
      originalPrice: 'R$ 159,90',
      image: 'https://images.pexels.com/photos/7262742/pexels-photo-7262742.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Vape Pen'
    },
    {
      id: 4,
      name: 'Pod Descartável Elf Bar',
      price: 'R$ 29,90',
      originalPrice: 'R$ 39,90',
      image: 'https://images.pexels.com/photos/7262743/pexels-photo-7262743.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Descartável'
    }
  ]

  const benefits = [
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entregamos em toda Esperança no mesmo dia'
    },
    {
      icon: Shield,
      title: 'Produtos Originais',
      description: 'Garantia de autenticidade em todos os produtos'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Seguro',
      description: 'Aceitamos PIX, cartão e dinheiro'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe é especializada em vaping'
    }
  ]

  

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
                Sua Loja de
                <span className="block gradient-text bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Pods & Vapes
                </span>
                em Esperança
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Os melhores produtos, preços imbatíveis e entrega rápida. 
                Descubra nossa seleção premium de pods e cigarros eletrônicos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/produtos" className="btn-primary text-center">
                  Ver Produtos
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="https://wa.me/558394027461" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Produtos Originais</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-blue-400" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Melhor Preço</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative glass-effect rounded-3xl p-8 animate-float">
                <img
                  src="https://images.pexels.com/photos/7262740/pexels-photo-7262740.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pod System Premium"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -25% OFF
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 animate-pulse-slow">
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold">Entrega Expressa</p>
                    <p className="text-blue-200 text-sm">Em até 2 horas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Produtos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecionamos os melhores produtos com preços especiais para você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    OFERTA
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar Agora
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/produtos" className="btn-primary">
              Ver Todos os Produtos
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="gradient-text">PodsPB</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos a melhor experiência em vaping com qualidade e confiança
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra os melhores produtos de vaping em Esperança
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/558394027461" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Falar no WhatsApp
              </a>
              <Link 
                to="/produtos"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Ver Catálogo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
