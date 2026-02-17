import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Card from './Card';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import SortAndFilter from './SortAndFilter/SortAndFilter';
import useSorting from '../hooks/useSorting';

function Dashboard() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  const userData = {
    profilePic: 'https://via.placeholder.com/100',
    name: 'Sid ',
    age: 28,
    value: '₹1,50,000',
    portfolioData: [
      {
        companyName: 'Reliance',
        sharesCount: '7',
        amount: '₹50,000'
      },
      {
        companyName: 'Indian Oil',
        sharesCount: '2',
        amount: '₹25,000'
      },
      {
        companyName: 'BSE',
        sharesCount: '1',
        amount: '₹85,000'
      },
    ]
  };

  if (showPortfolio) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>My Portfolio</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap' }}>
          {userData.portfolioData.map((item) => (
            <Card 
              companyName={item.companyName}
              sharesCount={item.sharesCount}
              amount={item.amount}
            />
          ))}
        </div>
        <button onClick={() => setShowPortfolio(false)} style={{ marginTop: '20px' }}>
          Back
        </button>
      </div>
    )
  }

  const { sortBy, setSortBy, sortedProducts } = useSorting(products);

  return (
    // <div>
    //   <Header />
    //   <div>
    //     <h2>Dashboard</h2>
    //     <img src={userData.profilePic} alt="Profile" />
    //     <h3>{userData.name}</h3>
    //     <p>Age: {userData.age}</p>
    //     <p>Value: {userData.value}</p>
    //     <button onClick={() => setShowPortfolio(true)}>Portfolio</button>
    //   </div>
    //   <Footer />
    // </div>
    <div style={{ padding: '20px' }}>
      <h1>E-commerce Product Catalog</h1>
      
      <SortAndFilter sortBy={sortBy}
        setSortBy={setSortBy} />
      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;








