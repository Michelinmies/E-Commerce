import React from 'react';
import styles from './ShoppingCart.module.css'

const ShoppingCart = ({ cart, removeFromCart, calculateCartTotal }) => {
  return (
    <div className={styles['cart']}>
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <div>
            <ul className={styles['cart-list']}>
              {cart.map((item) => (
                <li className={styles['cart-item']} key={item.id}>
                  {item.name} - ${item.price.toFixed(2)}
                  <button className={styles['cart-item-button']} onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${calculateCartTotal().toFixed(2)}</p>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
    </div>

  );
};

export default ShoppingCart;