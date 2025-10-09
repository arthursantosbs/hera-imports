
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const message = cart
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - R$ ${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n');
    const totalMessage = `\n*Total: R$ ${total.toFixed(2)}*`;
    const fullMessage = `Olá! Gostaria de fazer o seguinte pedido:\n\n${message}${totalMessage}`;
    const whatsappUrl = `https://wa.me/5583999442923?text=${encodeURIComponent(
      fullMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>
        {cart.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-600 mb-4">Seu carrinho está vazio.</p>
            <Link to="/produtos" className="btn-primary">
              Ver produtos
            </Link>
          </div>
        ) : (
          <div>
            <div className="bg-white rounded-lg shadow">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center border rounded-lg">
                      <button onClick={() => decrementQuantity(item.id)} className="p-2">
                        <Minus size={16} />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)} className="p-2">
                        <Plus size={16} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-2xl font-bold">R$ {total.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="w-full btn-primary">
                Finalizar Compra
              </button>
              <button onClick={clearCart} className="w-full mt-2 text-center text-gray-500 hover:text-red-500">
                Limpar Carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
