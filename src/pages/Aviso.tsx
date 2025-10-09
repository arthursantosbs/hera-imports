import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aviso: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center mb-6">
            <ShieldAlert className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Aviso de Saúde</h1>
          </div>
          <p className="text-gray-700 mb-4">
            A Organização Mundial da Saúde adverte: cigarros eletrônicos são prejudiciais à saúde. Contêm nicotina, que causa forte dependência.
          </p>
          <p className="text-gray-700 mb-6">
            O uso é proibido para menores de 18 anos. Caso tenha dúvidas, consulte um profissional de saúde.
          </p>
          <div className="flex justify-end">
            <Link to="/" className="bg-accent text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aviso;
