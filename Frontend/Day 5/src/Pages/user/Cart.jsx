// ItemCard.jsx
import React from 'react';
import '../../assets/css/Cart.css'
function Cart() {
  const items = [
    { name: "Aesthetic Perfumes", image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", price: 20 },
   
  ];

  return (
    <div className="box">
      {items.map((item, index) => (
        <div className="box-card" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="box-name">{item.name}</div>
          <div className="boxprice">${item.price}</div>
          <button className="add-to-cart-btn">Proceed to buy</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;