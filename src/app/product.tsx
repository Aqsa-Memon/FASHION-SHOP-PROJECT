import FeedbackCorner from "./feedback";

//Products
const Products = () => {
    const products = [
      { name: 'Regular Fit Long Sleeve Top', price: '$35.99', img: '/Long Sleeve.png', rating: 4.2 },
      { name: 'Black Crop Tailored Jacket', price: '$58.99', img: '/jacket.png', rating: 4.5 },
      { name: 'Black Jeans', price: '$30.99', img: '/jeans.png', rating: 2.8 },
      { name: 'Coat & Jacket for women', price: '$65.99', img: '/pent coat.png', rating: 3.6 },
      { name: 'Hoodie & sweater', price: '$60.99', img: '/hoodie-vs-sweater.png', rating: 4.5 },
      { name: 'Coat', price: '$20.99', img: '/coat.png', rating: 1.5 },
      // Add more products
    ];
  
    return (
      <section className="py-12 bg-green-100">
        <div className="container mx-auto text-center underline">
          <h3 className="text-4xl font-bold text-green-700 text-align-center">Best Selling</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {products.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm">
                <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                <h4 className="mt-4 text-xl font-bold">{product.name}</h4>
                <p className="text-green-600">{product.price}</p>
                <p>Rating: {product.rating}</p>
              </div>
            ))}
          </div>

        <FeedbackCorner /> 
        </div>
      </section>
    );
  };
  
  export default Products;
  