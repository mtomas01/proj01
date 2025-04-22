import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Star, ChevronRight, Menu as MenuIcon, X, Instagram, MessageSquare } from 'lucide-react';
import { AnimatedEmoji } from './components/AnimatedEmoji';
import { ProductDetails } from './components/ProductPage';
import { Categorias } from './components/Categorias';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Produc",
    "CS2",
    "Games",
  ];

  const products = [
    {
      id: "premium-valorant",
      name: "Pacote Premium",
      game: "Valorant",
      price: 500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
      features: [
        "PLAN:- Premium (4K UHD)",
        "Works on all devices",
        "24/7 Support",
        "Instant Delivery"
      ]
    },
    {
      id: "elite-cs2",
      name: "Pacote Elite",
      game: "CS2",
      price: 99.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
      features: [
        "PLAN:- Elite (4K UHD)",
        "Multi-device support",
        "Priority Support",
        "Instant Access"
      ]
    },
    {
      id: "pro-apex",
      name: "Pacote Pro",
      game: "Apex Legends",
      price: 299,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
      features: [
        "PLAN:- Pro (4K UHD)",
        "All platforms supported",
        "Premium Support",
        "Instant Setup"
      ]
    }
  ];

  const testimonials = [
    {
      name: "@kriti_roy",
      platform: "Telegram",
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
      message: "Encomendamos para nosso canal do telegram e, francamente, ficamos agradavelmente surpreendidos com a qualidade - os nomes não são aleatórios e todos com avatares.",
      emoji: "🎉"
    },
    {
      name: "jordannbrown",
      platform: "TikTok",
      icon: <MessageSquare className="w-5 h-5 text-black" />,
      message: "Tudo estava claro, os inscritos vieram em 3 horas, pedimos alguns para testar, tudo ok",
      emoji: "⭐"
    },
    {
      name: "virar_ratthore_",
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5 text-pink-500" />,
      message: "Usei HHH o instagram, os inscritos vieram rapidamente e sem problemas com a conta, eu recomendo",
      emoji: "🚀"
    },
    {
      name: "@rk__jhaa",
      platform: "WhatsApp",
      icon: <MessageSquare className="w-5 h-5 text-green-500" />,
      message: "Precisava de inscritos para um canal do telegram, tudo veio rapidamente e a qualidade é boa",
      emoji: "💫"
    }
  ];

  const socialFeatures = [
    {
      title: "MAIOR VISIBILIDADE",
      description: "O seu conteúdo será mais visível para um público mais amplo",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-marketing-5349009-4466410.png"
    },
    {
      title: "SUPORTE À REPUTAÇÃO",
      description: "Ajuda a corrigir avaliações negativas ou reparar sua imagem",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-engagement-5349010-4466411.png"
    },
    {
      title: "CONSTRUÇÃO DE CONFIANÇA",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-analysis-5349011-4466412.png"
    }
  ];

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="https://static.wixstatic.com/media/214089_82319b17984b44ed9c6114303e6a5cb0~mv2.jpg"
          alt="Setup Gamer"
          className="w-full h-[500px] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 text-gray-900">Produtos Digitais Premium</h1>
              <p className="text-xl text-gray-700 mb-8">Obtenha vantagem competitiva com nossas soluções seguras e não detectáveis</p>
              <Link 
                to="/categorias" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg flex items-center text-lg text-white w-fit transition-all duration-300 hover:scale-105"
              >
                Comprar
                <ChevronRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-900">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200 shadow-lg border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{product.game}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-600">
                    MZN {product.price}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-700">{product.rating}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white text-sm md:text-base">
                  Obter
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Social Presence Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-pink-400 to-indigo-500 text-transparent bg-clip-text">
            Presença Social e Maximize o Engajamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-200">
            {socialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 10, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="w-48 h-48 mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Satisfied Customers */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">100+ Clientes Satisfeitos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">{testimonial.message}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {testimonial.icon}
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  </div>
                  <AnimatedEmoji emoji={testimonial.emoji} className="text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Suporte 24/7</h3>
              <p className="text-gray-600">Nossa equipe está sempre disponível para ajudar com qualquer problema</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Entrega Instantânea</h3>
              <p className="text-gray-600">Acesse seus produtos imediatamente após a compra</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Pagamento Seguro</h3>
              <p className="text-gray-600">Suas transações são protegidas com criptografia de nível industrial</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold">DiHub</Link>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <ShoppingCart className="w-6 h-6" />
                </button>
                <button 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <MenuIcon className="w-5 h-5" />
                  <span>Menu</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Categories Menu */}
        <div className={`fixed right-0 top-0 h-1/2 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} rounded-bl-[10px]`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Categorias</h2>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg bg-gray-50">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>

        {/* Footer */}
        <footer>
          <div className="flex justify-between items-center py-4 px-8">
            <span className="text-gray-600">Todos os direitos reservados.</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
