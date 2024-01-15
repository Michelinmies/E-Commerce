import React, { useState } from 'react';
import styles from './ProductList.module.css'
import ShoppingCart from './ShoppingCart';
import CategoryFilter from './CategoryFilter';

const products = [
  {
    id: 1,
    name: "JBL Tune 760NC",
    description: "This is the description for Product 1. It's a great product for your needs.",
    price: 49.99,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQJ3qrJmeQ_IROQRKbq8xJKnIqK7mW7i4AH8j6e-XE7Bd9GKUP5d76FobR1Y1Xbjpw2EPNjV2gOFGUSAfJIYFUVcXGXpeT5cEuujHzHGPY&usqp=CAc",
    category: "Headphones",
    stock: 100
  },
  {
    id: 2,
    name: "JBL Tune 230NC",
    description: "Product 2 is a high-quality item that meets your requirements.",
    price: 39.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTc8rKU4p24P5d_gDpE7VxJOwRhJR_CX76SpKT-IovNu6S_Cv8jGlUfHKnETqn30S3wvk2LwGgmUZ6bsZaE5aKTyyweRiVi-yEUAkIZZ9Fn&usqp=CAc",
    category: "Headphones",
    stock: 50
  },
  {
    id: 3,
    name: "Huawei Watch Gt3 SE",
    description: "A versatile and reliable product, suitable for various tasks.",
    price: 119.00,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMbaLPKCnU8pyNdcNlREGhDyK-WuuyVLfZRcQ8rAQ5HdawOWZ2sHfwYuMfUBIAaFWki_xRZ6OYp62gwmvUSJiH9yJ6WD8QvvYLeMVcuF6taErid6TD76_CeQ&usqp=CAc",
    category: "Watches",
    stock: 75
  },
  {
    id: 4,
    name: "Apple Eatch SE",
    description: "Enhance your style with Product 4. It's stylish and affordable.",
    price: 259.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR82LMmEBa9h9HJ0mML12UvCDJrhS_C-LEYixdgAfIlOw55C8cyR4adSPzqGRSo1N-NrKOevYUgOV1qEqtb8w-_PEqgqldHhPjHf-Yik3etbKXKB9G189-hhBsiUaJUzxudr8khWinYVlw&usqp=CAc",
    category: "Watches",
    stock: 60
  },
  {
    id: 5,
    name: "Lenovo Chromebook IdeaPad 3",
    description: "Product 5 is perfect for outdoor adventures. Get yours now!",
    price: 39.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_MTU-8fiOh6zNw_Px6MN2tMEodkanswTP4b0-9hEUvtTG5nl7jzcQH1M7l0Kh_fZXuwIPItteHBWkOg1XKZ_S2z7OLmQpN52XlvUhSs7GLtVazaB_jdjK&usqp=CAc",
    category: "Laptops",
    stock: 40
  },
  {
    id: 6,
    name: "Samsung Galaxy Book2",
    description: "A must-have for tech enthusiasts. Product 6 has the latest features.",
    price: 379.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKz_6Ry5xkXO5l7Lc2K0YY5t9GcL4bSfNyS-x0kWBOyifCwVDG1wpnN_qTex9QmkTFtxsV5vQUf-Bp3vdIJwOL5GJgR0fvPrnkGQTu_hhQ&usqp=CAc",
    category: "Laptops",
    stock: 30
  },
  {
    id: 7,
    name: "iPhone 13",
    description: "Product 7 is perfect for outdoor adventures. Get yours now!",
    price: 649.99,
    image: "https://www.gigantti.fi/image/dv_web_D180001002838550/361941/iphone-13-5g-alypuhelin-128-gb-pinkki--pdp_zoom-3000--pdp_main-540.jpg",
    category: "Phones",
    stock: 40
  },
  {
    id: 8,
    name: "iPhone 12",
    description: "Product 7 is perfect for outdoor adventures. Get yours now!",
    price: 599.00,
    image: "https://www.gigantti.fi/image/dv_web_D180001002839635/234550/iphone-12-5g-alypuhelin-64-gb-musta--pdp_zoom-3000--pdp_main-540.jpg",
    category: "Phones",
    stock: 40
  },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setCart(prevCart => [...prevCart, selectedProduct]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <h1>Product List</h1>

      <CategoryFilter
        toggleDropdown={toggleDropdown}
        dropdownVisible={dropdownVisible}
        uniqueCategories={uniqueCategories}
        filterProductsByCategory={filterProductsByCategory}
        />

      {/* Product List */}
      <ul className={styles['product-list']}>
        {products
          .filter(product => selectedCategory === null || product.category === selectedCategory)
          .map((product) => (
            <li key={product.id} className={styles['product-item']}>
              <div className={styles['product-container']}>
                <a href={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className={styles['product-image']} />
                </a>
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <p>Category: {product.category}</p>
                  <p>In Stock: {product.stock} units</p>
                  <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                </div>
              </div>
            </li>
          ))}
      </ul>

      {/* Shopping Cart */}
      <ShoppingCart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateCartTotal={calculateCartTotal}
      />
    </div>
  );
};
//g
export default ProductList;