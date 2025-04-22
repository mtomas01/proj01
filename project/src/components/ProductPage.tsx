import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDetailsProps {
  products: {
    name: string;
    game: string;
    price: number;
    image: string;
    id: string;
    features: string[];
  }[];
}

export function ProductDetails({ products }: ProductDetailsProps) { 
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [email, setEmail] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaytmQR, setShowPaytmQR] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleCreateOrder = () => {
    if (!email) {
      alert('Por favor, insira seu email');
      return;
    }
    setShowPaymentModal(true);
  };

  const handlePaymentConfirmation = () => {
    if (!customerName) {
      alert('Por favor, insira seu nome');
      return;
    }
    setIsProcessing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setCustomerName(value);
    }
  };

  const PaymentModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-blue-500/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setShowPaymentModal(false)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
      >
        <h2 className="text-2xl font-bold mb-4">Selecione o método de pagamento</h2>
        <p className="text-gray-600 mb-2">{email}</p>
        <div className="border-t border-b py-4 my-4">
          <div className="flex justify-between items-center">
            <span>Quantidade</span>
            <span>1</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span>Total</span>
            <span>{product.price} MT</span>
          </div>
        </div>
        <button
          onClick={() => {
            setShowPaymentModal(false);
            setShowPaytmQR(true);
          }}
          className="w-full flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg hover:bg-gray-50"
        >
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/214089_c3486148a1984131aff2e553446e93ba~mv2.jpg"
              alt="M-pesa"
              className="w-16 h-8 object-contain"
            />
            <span className="ml-3">M-Pesa QR</span>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );

  const PaytmQRModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50"
      onClick={() => !isProcessing && setShowPaytmQR(false)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
      >
        {isProcessing ? (
          <div className="text-center p-8">
            <h2 className="text-2xl font-semibold mb-4">Aguarde o pagamento</h2>
            <p className="text-gray-600 mb-8">
              O pagamento foi iniciado. O link será enviado instantaneamente após a confirmação
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <img
              src="https://static.wixstatic.com/media/214089_c3486148a1984131aff2e553446e93ba~mv2.jpg"
              alt="Paytm"
              className="h-8 mx-auto mb-4"
            />
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="https://chart.googleapis.com/chart?cht=qr&chl=upi://pay?pa=example@paytm&pn=MERCHANT&am=99.00&cu=INR&tn=Payment%20for%20Order%20123&tr=123456789"
                alt="Numero 852392534 MIGUEL T***S"
                className="w-full max-w-xs mx-auto"
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">Escaneie o código QR com o M-pesa para pagar</p>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded">
                <span className="text-gray-600">Valor</span>
                <span className="font-medium">{product.price} MT</span>
              </div>
              <div className="space-y-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Seu nome"
                  value={customerName}
                  onChange={handleNameChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  autoComplete="name"
                  spellCheck="false"
                  autoCapitalize="words"
                  maxLength={50}
                />
                <button
                  onClick={handlePaymentConfirmation}
                  className="w-full py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center p-6">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-contain mr-4 rounded-lg" />
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">{product.game}</p>
            
            <div className="mb-6">
              <div className="text-base font-semibold text-blue-600 mb-2">
                {product.price} MT
              </div>
              <div className="text-sm text-gray-500">ID: {product.id}</div>
            </div>

            <div className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold">Descrição:</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Email ou whatsaap para receber o link do produto
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                onClick={handleCreateOrder}
                disabled={!email}
                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors ${
                  !email ? 'opacity-80 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPaymentModal && <PaymentModal />}
        {showPaytmQR && <PaytmQRModal />}
      </AnimatePresence>
    </div>
  );
}
