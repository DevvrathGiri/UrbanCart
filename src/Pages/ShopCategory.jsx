import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('featured');

  // Filter products by category
  const categoryProducts = all_product.filter(item => item.category === props.category);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  return (
    <div className="py-12">
      {/* Banner */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <img 
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl" 
          src={props.banner} 
          alt="Category banner" 
        />
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">
              Showing 1-{Math.min(12, categoryProducts.length)}
            </span>{' '}
            out of {categoryProducts.length} products
          </p>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">
              Sort by:
            </span>
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all">
                {sortOptions.find(opt => opt.value === sortOption)?.label || 'Featured'}
                <img src={dropdown_icon} alt="sort" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {categoryProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="mx-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full shadow-sm hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all w-52">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
