

import { motion } from 'framer-motion'
import {MapPin, Phone, Clock, MessageCircleDashed as MessageCircle} from 'lucide-react'

const Contato = () => {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Esperança, Paraíba',
      subContent: 'Região Central'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 83 9402-7461',
      subContent: 'WhatsApp disponível'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Domingo a Domingo',
      subContent: '12h às 21h'
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
              Entre em <span className="text-yellow-400">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco e tire todas as suas dúvidas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Informações de <span className="gradient-text">Contato</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Encontre as melhores formas de entrar em contato conosco. 
                  Estamos sempre prontos para atender você!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500">
                          {info.subContent}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Atendimento WhatsApp
                    </h3>
                    <p className="text-gray-600">
                      Resposta rápida e atendimento personalizado
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/558394027461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa/Localização */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loja 100% <span className="gradient-text">Online</span>
            </h2>
            <p className="text-xl text-gray-600">
              Entregamos em toda Esperança
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 rounded-2xl h-80 sm:h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mapa em Breve
              </h3>
              <p className="text-gray-600">
                Localização: Esperança, Paraíba
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contato
