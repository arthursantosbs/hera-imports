import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, X } from 'lucide-react';

const AgeVerificationModal: React.FC<{ onVerified: () => void }> = ({ onVerified }) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const isSmall = typeof window !== 'undefined' && window.innerWidth < 480;
  const baseCount = isSmall ? 14 : 24;
  const smokePuffs = Array.from({ length: baseCount }, (_, i) => ({
    left: `${(i * 6 + (i % 4) * 7) % 100}%`,
    size: (isSmall ? 120 : 160) + (i % 6) * (isSmall ? 36 : 52),
    duration: 8 + (i % 6) * 1.5,
    delay: (i % 9) * 0.55,
  }));

  const handleVerification = (isOfAge: boolean) => {
    if (isOfAge) {
      // Trigger a brief smoke burst before closing
      setConfirming(true);
      setTimeout(() => {
        onVerified();
      }, 900);
    } else {
      setIsBlocked(true);
    }
  };

  if (isBlocked) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 text-white text-center p-4">
        <div className="smoke-overlay">
          {smokePuffs.map((p, i) => (
            <span
              key={i}
              className="smoke-puff"
              style={{
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
        <div>
          <ShieldAlert className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Acesso Restrito</h2>
          <p className="text-lg text-gray-300">
            Este site é destinado apenas para maiores de 18 anos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="smoke-overlay">
        {smokePuffs.map((p, i) => (
          <span
            key={i}
            className="smoke-puff"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      {confirming && (
        <div className="smoke-overlay">
          {Array.from({ length: isSmall ? 20 : 32 }, (_, i) => ({
            left: `${(i * 3.5 + (i % 6) * 2.8) % 100}%`,
            size: (isSmall ? 140 : 190) + (i % 7) * (isSmall ? 40 : 60),
            duration: 4.2 + (i % 5) * 0.85,
            delay: (i % 7) * 0.12,
          })).map((p, i) => (
            <span
              key={`burst-${i}`}
              className="smoke-puff"
              style={{
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                opacity: 0.42,
              }}
            />
          ))}
        </div>
      )}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center"
      >
        <ShieldAlert className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Você tem mais de 18 anos?</h2>
        <p className="text-gray-600 mb-8">
          Para acessar este site, você precisa confirmar que é maior de idade.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleVerification(false)}
            className="py-3 px-8 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors"
          >
            Não
          </button>
          <button
            onClick={() => handleVerification(true)}
            disabled={confirming}
            className={`py-3 px-10 rounded-full font-semibold transition-opacity ${confirming ? 'bg-green-700/70 text-white cursor-wait' : 'bg-accent text-white hover:bg-green-700'}`}
          >
            {confirming ? 'Entrando...' : 'Sim'}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          Ao clicar em "Sim", você confirma que tem 18 anos ou mais e concorda com nossos termos de serviço.
        </p>
      </motion.div>
    </div>
  );
};

export const HealthWarning: React.FC<{ onAcknowledge: () => void }> = ({ onAcknowledge }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed bottom-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg shadow-lg max-w-sm z-50"
    >
      <div className="flex">
        <ShieldAlert className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
        <div className="flex-grow">
          <h4 className="font-bold">Aviso de Saúde</h4>
          <p className="text-sm">
            A Organização Mundial da Saúde adverte: cigarros eletrônicos são prejudiciais à saúde. Contêm nicotina, que causa forte dependência.
          </p>
        </div>
        <button onClick={onAcknowledge} className="ml-4 flex-shrink-0">
          <X className="h-5 w-5 text-yellow-700 hover:text-yellow-900" />
        </button>
      </div>
    </motion.div>
  );
};

export default AgeVerificationModal;
