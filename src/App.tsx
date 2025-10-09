
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import AgeVerificationModal from './components/AgeVerificationModal';

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  // Removido aviso de saúde (banner)

  // Removido: nenhuma persistência; modal aparece em toda visita

  const handleVerification = () => {
    setIsAgeVerified(true);
  };

  // Removido: aviso de saúde

  return (
    <div className="min-h-screen bg-white">
      {!isAgeVerified && <AgeVerificationModal onVerified={handleVerification} />}
      
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Rota de aviso removida */}
        </Routes>
      </main>
      <Footer />
      {/* Aviso de saúde removido */}
    </div>
  );
}

export default App;
