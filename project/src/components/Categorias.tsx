import React from 'react';
import { Search, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Plan {
  id: string;
  name: string;
  screens: number;
  validity: number;
  price: number;
}

export function Categorias() {
  const plans: Plan[] = [
    {
      id: 'netflix-4k-6m-1s',
      name: 'NETFLIX 4K UHD',
      screens: 1,
      validity: 6,
      price: 1249
    },
    {
      id: 'netflix-4k-6m-2s',
      name: 'NETFLIX 4K UHD',
      screens: 2,
      validity: 6,
      price: 1999
    },
    {
      id: 'netflix-4k-6m-4s',
      name: 'NETFLIX 4K UHD',
      screens: 4,
      validity: 6,
      price: 3499
    },
    {
      id: 'netflix-4k-12m-1s',
      name: 'NETFLIX 4K UHD',
      screens: 1,
      validity: 12,
      price: 1799
    },
    {
      id: 'netflix-4k-12m-2s',
      name: 'NETFLIX 4K UHD',
      screens: 2,
      validity: 12,
      price: 3199
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4 w-full">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <Home className="w-6 h-6" />
            </Link>
            <span className="text-gray-400">/</span>
            <span>Categorias</span>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </div>
          </div>
        </div>

        {/* Plans List */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <Link
              to={`/product/1`}
              key={plan.id}
              className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
                  alt="Netflix"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {plan.name} - {plan.validity} Meses de Validade ( {plan.screens} tela{plan.screens > 1 ? 's' : ''} )
                  </h3>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl text-gray-600">{plan.price}₹</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
