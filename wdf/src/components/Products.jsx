import React, { useState } from 'react';
import './Products.css';

export const Products = ({ toggleCart, isCartOpen, setCartOpen, Cartitems, setCartitems }) => {
  const [category, setCategory] = useState("ALL");

  function add(productName, productImage, productcategory) {
    const productid = Date.now();
    
    // Add product to cart
    setCartitems((prevCart) => [
      ...prevCart,
      {
        id: productid,
        productname: productName,
        productimage: productImage,
        productcategory: productcategory,
      },
    ]);

    setCartOpen(true);
  }

  const filteredItems = category === "ALL"
    ? Cartitems
    : Cartitems.filter((p) => p.productcategory === category);

  return (
    <div className='products-container'>
      <div className='products'>
        <div className='product-box'>
          <img src="https://www.kindpng.com/picc/m/334-3341394_black-long-stylish-dress-shirt-png-image-mens.png" alt="Elegant Summer Dress" />
          <h3 className="product-name">Elegant Summer Dress</h3>
          <div className="rating"> ★ ★ ★ ★ ★ <span>(4.8 / 120 Reviews)</span> </div>
          <div className="add-to-cart" onClick={() => add("Elegant Summer Dress", "https://www.kindpng.com/picc/m/334-3341394_black-long-stylish-dress-shirt-png-image-mens.png", "dress")}>
            Add to Cart - $318.99
          </div>
        </div>

        <div className='product-box'>
          <img src="https://m.media-amazon.com/images/I/61pQHhJ9kPL._SX569_.jpg" alt="Casual Shirt" />
          <h3 className="product-name">Casual Shirt</h3>
          <div className="rating"> ★ ★ ★ ★ ★ <span>(4.6 / 100 Reviews)</span> </div>
          <div className="add-to-cart" onClick={() => add("Casual Shirt", "https://m.media-amazon.com/images/I/61pQHhJ9kPL._SX569_.jpg", "dress")}>
            Add to Cart - $120.99
          </div>
        </div>

        <div className='product-box'>
          <img style={{ width: '220px' }} src="https://m.media-amazon.com/images/I/31VSGbm2K5L._SX300_SY300_QL70_FMwebp_.jpg" alt="Wireless Headphones" />
          <h3 className="product-name">Wireless Headphones</h3>
          <div className="rating"> ★ ★ ★ ★ ★ <span>(4.7 / 150 Reviews)</span> </div>
          <div className="add-to-cart" onClick={() => add("Wireless Headphones", "https://m.media-amazon.com/images/I/31VSGbm2K5L._SX300_SY300_QL70_FMwebp_.jpg", "electronic")}>
            Add to Cart - $199.99
          </div>
        </div>

        <div className='product-box'>
          <img style={{ marginTop: '20px' }} src="https://m.media-amazon.com/images/I/41-ZbZT52RL._SY445_SX342_QL70_FMwebp_.jpg" alt="Table Lamp" />
          <h3 className="product-name">Table Lamp</h3>
          <div className="rating"> ★ ★ ★ ★ ☆ <span>(4.5 / 80 Reviews)</span> </div>
          <div className="add-to-cart" onClick={() => add("Table Lamp", "https://m.media-amazon.com/images/I/41-ZbZT52RL._SY445_SX342_QL70_FMwebp_.jpg", "home")}>
            Add to Cart - $89.99
          </div>
        </div>

        <div className='product-box'>
          <img style={{ width: '200px', marginTop: '30px' }} src="https://m.media-amazon.com/images/I/51I36y085zL._SY695_.jpg" alt="Running Shoes" />
          <h3 className="product-name">Running Shoes</h3>
          <div className="rating"> ★ ★ ★ ★ ★ <span>(4.9 / 200 Reviews)</span> </div>
          <div className="add-to-cart" onClick={() => add("Running Shoes", "https://m.media-amazon.com/images/I/51I36y085zL._SY695_.jpg", "shoe")}>
            Add to Cart - $150.99
          </div>
        </div>

        <div className='product-box'>
          <img src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_600,h_780,q_auto,f_auto,e_sharpen/SD_03_T25_4330A_X8_X_EC_94" alt="AI Summer Dress" />
          <h3 className="product-name">AI Summer Dress</h3>
          <div className="rating"> ★ ★ ★ ★ ★ <span>(4.8 / 120 Reviews)</span> </div>
          <div className="add-to-cart" onClick={() => add("AI Summer Dress", "https://assets.digitalcontent.marksandspencer.app/image/upload/w_600,h_780,q_auto,f_auto,e_sharpen/SD_03_T25_4330A_X8_X_EC_94", "dress")}>
            Add to Cart - $299.99
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="offcanvas">
          <div className="offcanvas-content">
            <button className="close-btn" onClick={toggleCart}>❌</button>
            <h2 className='cart'>Your Cart</h2>

            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="ALL">ALL</option>
              <option value="home">Home</option>
              <option value="electronic">Electronic</option>
              <option value="dress">Dress</option>
              <option value="shoe">Shoe</option>
            </select>

            <div className='items'>
              <ul>
                {filteredItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.productimage} alt={item.productname} width="50" />
                    <strong>{item.productname}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className='checkout'>Checkout</button>
        </div>
      )}
    </div>
  );
};
