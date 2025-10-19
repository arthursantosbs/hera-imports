
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold">Hera pod’s</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Sua loja especializada em pods e cigarros eletrônicos em Esperança. 
              Oferecemos produtos de qualidade com entrega rápida e os melhores preços da Região.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-white transition-colors">
                  Catálogo Completo
                </Link>
              </li>
            </ul>
          </div>

          {/* Informação */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre o Catálogo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Apresentamos os produtos disponíveis, com preços atualizados e todos os sabores em estoque.
              A compra é realizada presencialmente com nossos parceiros autorizados.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PodEs. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500 text-sm">
              Catálogo informativo – sem vendas online
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
