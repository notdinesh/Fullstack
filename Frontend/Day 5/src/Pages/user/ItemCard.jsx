// ItemCard.jsx
import React from 'react';
import '../../assets/css/ItemCard.css';
import { useNavigate } from 'react-router-dom';

function ItemCard() {
  
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cg/user/cart'); // Replace with your actual cart page path
  };
  
  
  const items = [
    { name: "Aesthetic Perfumes", image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", price: 20 },
    { name: "Surprise Gifts", image: "https://images.pexels.com/photos/3309878/pexels-photo-3309878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", price: 25 },
    // Add more items as needed
    { name: "Candy", image: "https://images.pexels.com/photos/6798334/pexels-photo-6798334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", price: 5 },
    { name: "Flowers", image: "https://images.pexels.com/photos/5414039/pexels-photo-5414039.jpeg", price: 25 },
    // Add more items as needed
    { name: "Ring", image: "https://images.pexels.com/photos/6765959/pexels-photo-6765959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", price: 30 },
    { name: "Mugs", image: "https://images.pexels.com/photos/14686833/pexels-photo-14686833.jpeg", price: 25 },
    // Add more items as needed
  ];

  return (
    <div className="container">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>
          {/* <button className="add-to-cart-btn " >Add to Cart</button> */}
          <button className="add-to-cart-btn" onClick={handleCartClick}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;