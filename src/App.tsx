import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import ProductDetail from './pages/ProductDetail';
import AgeVerificationModal from './components/AgeVerificationModal';
import FogOverlay from './components/FogOverlay';

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showTransitionFog, setShowTransitionFog] = useState(true);
  // Removido aviso de saúde (banner)

  // Removido: nenhuma persistência; modal aparece em toda visita

  const handleVerification = () => {
    setIsAgeVerified(true);
  };

  useEffect(() => {
    if (!isAgeVerified) {
      setShowTransitionFog(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowTransitionFog(false);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [isAgeVerified]);

  // Removido: aviso de saúde

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <FogOverlay active={!isAgeVerified || showTransitionFog} density={!isAgeVerified ? 'dense' : 'light'} />
      {!isAgeVerified && <AgeVerificationModal onVerified={handleVerification} />}
      
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* Rota de aviso removida */}
        </Routes>
      </main>
      <Footer />
      {/* Aviso de saúde removido */}
    </div>
  );
}

export default App;
