
import { motion } from 'framer-motion'
import {Users, Award, Heart, Shield, CheckCircle, Star, ShoppingCart, PackageOpen} from 'lucide-react'

const Sobre = () => {
  const values = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com produtos originais e de marcas reconhecidas no mercado.'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Nossa equipe está sempre pronta para oferecer o melhor atendimento e suporte.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência em todos os aspectos do nosso negócio.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Fomentamos uma comunidade saudável e responsável de vaping.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-smoke-top opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a <span className="text-yellow-400">Hera pod’s</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Sua loja 100% online especializada em vaping em Esperança, oferecendo produtos de qualidade 
              e atendimento especializado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios que guiam nossa missão de oferecer a melhor experiência em vaping
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações da Loja */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Loja <span className="gradient-text">100% Online</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Mantemos um catálogo sempre atualizado com os pods mais pedidos, destacando sabores e estoques disponíveis para parceiros de revenda.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consulta Rápida</h3>
                    <p className="text-gray-600">Use o site para conferir preços atuais, fotos e ficha técnica de cada produto.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PackageOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Retirada com Parceiros</h3>
                    <p className="text-gray-600">Após escolher, finalize diretamente com nossos pontos físicos credenciados.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Por que Escolher a Hera pod’s?
              </h3>
              
              <div className="space-y-4">
                {[
                  'Produtos 100% originais e certificados',
                  'Atendimento especializado e personalizado',
                  'Entrega rápida em Esperança',
                  'Preços competitivos e promoções exclusivas',
                  'Suporte técnico e pós-venda',
                  'Compra online fácil e segura'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-red-100 to-red-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">Avaliação dos Clientes</span>
                </div>
                <p className="text-gray-600">
                  Nossos clientes nos avaliam com 4.9/5 estrelas!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
