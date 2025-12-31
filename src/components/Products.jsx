import React, { useState } from 'react';

function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productService, setProductService] = useState('');

  const products = [
    { id: 1, name: 'Global Leaders Forum !NEW (3 Days)', column: 'left' },
    { id: 2, name: 'GITEX Main Stage', column: 'left' },
    { id: 3, name: 'Artificial Intelligence & Robotics (15)', column: 'left' },
    { id: 4, name: 'AI Everything (4 Days)', column: 'left' },
    { id: 5, name: 'Cybersecurity (4 Days)', column: 'left' },
    { id: 6, name: 'Future Health !NEW (2 Days)', column: 'left' },
    { id: 7, name: 'Digital Cities (1 Day)', column: 'right' },
    { id: 8, name: 'Edtech (1 Day)', column: 'right' },
    { id: 9, name: 'Energy Transition (1 Day)', column: 'right' },
    { id: 10, name: 'Intelligent Connectivity (1 Day)', column: 'right' },
    { id: 11, name: 'Digital Finance (1 Day)', column: 'right' },
    { id: 12, name: 'Future Mobility (1 Day)', column: 'right' },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    console.log('Selected:', selectedProducts);
    console.log('Search:', productService);
  };

  const handleCancel = () => {
    setSelectedProducts([]);
    setProductService('');
  };

  // 🔍 FILTER PRODUCTS BASED ON SEARCH
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(productService.toLowerCase())
  );

  const leftProducts = filteredProducts.filter(p => p.column === 'left');
  const rightProducts = filteredProducts.filter(p => p.column === 'right');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F3D1E] via-[#1E7F2A] to-[#2FAF3B] p-4">
      <div className="max-w-6xl w-full">

        {/* Header */}
        <div className="rounded-t-2xl p-6 relative bg-gradient-to-r from-[#1E7F2A] to-[#2FAF3B] shadow-xl">
          <h1 className="text-white text-3xl font-bold">SELECT WORKSHOPS</h1>
          <button
            onClick={handleCancel}
            className="absolute top-6 right-6 border-2 border-white rounded-full p-2 hover:bg-white/20 transition"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-2xl shadow-xl p-8">

          {/* Search Input */}
          <input
            type="text"
            value={productService}
            onChange={(e) => setProductService(e.target.value)}
            placeholder="Try Product/Service"
            className="w-full px-6 py-4 mb-6 border-2 border-gray-300 rounded-xl text-lg focus:border-green-600 focus:outline-none"
          />

          {/* Description */}
          <p className="text-gray-700 mb-6 font-medium">
            I Am Interested In Sourcing The Following Solutions/Products? (Select Top 5)
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {[leftProducts, rightProducts].map((column, idx) => (
              <div key={idx} className="space-y-4">
                {column.map(product => (
                  <label key={product.id} className="flex items-center gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                      className="w-6 h-6 accent-green-600"
                    />
                    <span className="text-lg text-gray-800 hover:text-green-700">
                      {product.name}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
            <button
              onClick={handleCancel}
              className="px-8 py-3 border-2 rounded-lg font-semibold"
            >
              CANCEL
            </button>
            <button
              onClick={handleApply}
              className="px-8 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800"
            >
              APPLY
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;

