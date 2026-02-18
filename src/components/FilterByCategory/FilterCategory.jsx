import { products } from "../../data/products";

export default function FilterCategory({selectedCategory, setSelectedCategory, stockStatus, setStockStatus}) {
  const categories = ['all', ...new Set(products.map(p => p.category))];   
  const stockstatus = ['all', 'In Stock', 'Out of Stock'] 
    return(
        <div style={{
        marginTop: '20px',
        marginBottom: '20px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
        <label style={{ 
          display: 'block',
          marginBottom: '10px',
          fontWeight: 'bold' 
        }}>
          Filter by Category:
        </label>
        <div style={{ display: 'flex', gap: '400px' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 16px',
                border: '2px solid #0066cc',
                borderRadius: '20px',
                background: selectedCategory === category 
                  ? '#0066cc' 
                  : 'white',
                color: selectedCategory === category 
                  ? 'white' 
                  : '#0066cc',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {stockstatus.map((status) => (
            <button
              key={status}
              onClick={() => setStockStatus(status)}
              style={{
                padding: '8px 16px',
                border: '2px solid #0066cc',
                borderRadius: '20px',
                background: stockStatus === status 
                  ? '#0066cc' 
                  : 'white',
                color: stockStatus === status 
                  ? 'white' 
                  : '#0066cc',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
          </div>
        </div>
      </div>
    )
}