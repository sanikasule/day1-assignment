import { useState } from "react";

function useFiltering(products) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const [stockStatus, setStockStatus] = useState('all')

//     const getFilteredProducts = () => {
//     if (selectedCategory === 'all') {
//       return products;
//     }

//     let stockMatch = true;
//     if(stockStatus === 'In Stock') {stockMatch = products.inStock === true}
//     if(stockStatus === 'Out of Stock') {stockMatch = products.inStock === false}

//     return products.filter(product => 
//       product.category === selectedCategory
//     );
//   };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory

    let stockMatch = true;
    if (stockStatus === 'In Stock') {
      stockMatch = product.inStock === true;
    } else if (stockStatus === 'Out of Stock') {
      stockMatch = product.inStock === false;
    }
    
    return categoryMatch && stockMatch;
  })

  return {
    selectedCategory, 
    setSelectedCategory, 
    stockStatus,
    setStockStatus,
    filteredProducts
  }
}

export default useFiltering