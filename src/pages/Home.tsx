
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Zap, Shield, Star } from 'lucide-react';
import { getProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = getProducts();

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Seção Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary to-secondary text-white overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-smoke-top opacity-60" />
        <div className="container mx-auto px-4 py-24 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Hera pod’s
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-red-100"
          >
                  Catálogo digital com todos os pods disponíveis, sabores atualizados e valores para consulta rápida.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/produtos"
              className="bg-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
            >
                    Ver catálogo completo
                    <Eye className="inline-block ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Seção de Produtos em Destaque */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/produtos" className="text-primary font-semibold hover:underline">
              Ver todos os produtos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Vantagens */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6"
            >
              <Zap className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Atualização Constante</h3>
              <p className="text-gray-600">Sabores e estoques revisados para você saber exatamente o que está disponível.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6"
            >
              <Star className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Avaliações Reais</h3>
              <p className="text-gray-600">Notas e impressões de quem já testou cada linha de pods.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-6"
            >
              <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Detalhamento Completo</h3>
              <p className="text-gray-600">Cada produto com ficha técnica, fotos e lista de sabores antes de visitar o ponto físico.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
