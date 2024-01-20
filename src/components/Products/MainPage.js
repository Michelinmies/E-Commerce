import React, { useState } from 'react';
import styled from 'styled-components'
import styles from './MainPage.module.css'
import ShoppingCart from './ShoppingCart';
import CategoryFilter from './CategoryFilter';
import Nav from '../Navigation/Nav';
import Sidebar from '../Sidebar/Sidebar';

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`

const products = [
  {
    id: 1,
    name: "JBL Tune 760NC",
    description: "Immerse yourself in high-quality sound with the JBL Tune 760NC headphones.",
    price: 49.99,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQJ3qrJmeQ_IROQRKbq8xJKnIqK7mW7i4AH8j6e-XE7Bd9GKUP5d76FobR1Y1Xbjpw2EPNjV2gOFGUSAfJIYFUVcXGXpeT5cEuujHzHGPY&usqp=CAc",
    category: "Headphones",
  },
  {
    id: 2,
    name: "JBL Tune 230NC",
    description: "Experience superior audio quality with the JBL Tune 230NC headphones.",
    price: 39.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTc8rKU4p24P5d_gDpE7VxJOwRhJR_CX76SpKT-IovNu6S_Cv8jGlUfHKnETqn30S3wvk2LwGgmUZ6bsZaE5aKTyyweRiVi-yEUAkIZZ9Fn&usqp=CAc",
    category: "Headphones",
  },
  {
    id: 3,
    name: "Huawei Watch Gt3 SE",
    description: "Elevate your style and stay connected with the Huawei Watch Gt3 SE.",
    price: 119.00,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMbaLPKCnU8pyNdcNlREGhDyK-WuuyVLfZRcQ8rAQ5HdawOWZ2sHfwYuMfUBIAaFWki_xRZ6OYp62gwmvUSJiH9yJ6WD8QvvYLeMVcuF6taErid6TD76_CeQ&usqp=CAc",
    category: "Watches",
  },
  {
    id: 4,
    name: "Apple Watch SE",
    description: "Enhance your style with the Apple Watch SE. It's a perfect blend of style and affordability.",
    price: 259.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR82LMmEBa9h9HJ0mML12UvCDJrhS_C-LEYixdgAfIlOw55C8cyR4adSPzqGRSo1N-NrKOevYUgOV1qEqtb8w-_PEqgqldHhPjHf-Yik3etbKXKB9G189-hhBsiUaJUzxudr8khWinYVlw&usqp=CAc",
    category: "Watches",
  },
  {
    id: 5,
    name: "Lenovo Chromebook IdeaPad 3",
    description: "Product is perfect for work and play. Grab your Lenovo Chromebook IdeaPad 3 now!",
    price: 399.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_MTU-8fiOh6zNw_Px6MN2tMEodkanswTP4b0-9hEUvtTG5nl7jzcQH1M7l0Kh_fZXuwIPItteHBWkOg1XKZ_S2z7OLmQpN52XlvUhSs7GLtVazaB_jdjK&usqp=CAc",
    category: "Laptops",
  },
  {
    id: 6,
    name: "Samsung Galaxy Book2",
    description: "Stay ahead with the Samsung Galaxy Book2. Packed with the latest features!",
    price: 379.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKz_6Ry5xkXO5l7Lc2K0YY5t9GcL4bSfNyS-x0kWBOyifCwVDG1wpnN_qTex9QmkTFtxsV5vQUf-Bp3vdIJwOL5GJgR0fvPrnkGQTu_hhQ&usqp=CAc",
    category: "Laptops",
  },
  {
    id: 7,
    name: "iPhone 13",
    description: "Unleash the adventurer in you with the iPhone 13. Perfect for outdoor enthusiasts!",
    price: 649.99,
    image: "https://www.gigantti.fi/image/dv_web_D180001002838550/361941/iphone-13-5g-alypuhelin-128-gb-pinkki--pdp_zoom-3000--pdp_main-540.jpg",
    category: "Phones",
  },
  {
    id: 8,
    name: "iPhone 12",
    description: "Step into the future with the iPhone 12. Your perfect companion for outdoor adventures!",
    price: 599.00,
    image: "https://www.gigantti.fi/image/dv_web_D180001002839635/234550/iphone-12-5g-alypuhelin-64-gb-musta--pdp_zoom-3000--pdp_main-540.jpg",
    category: "Phones",
  },
  {
    id: 9,
    name: "Sony WH-1000XM4",
    description: "Immerse yourself in high-quality audio with Sony WH-1000XM4 headphones.",
    price: 349.99,
    image: "https://renowoutlet.com/cdn/shop/files/9113133-75p64MMhivkiMKBWlJLFR6.webp?v=1698154038&width=1100",
    category: "Headphones",
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 4",
    description: "Stay connected and track your fitness with the Samsung Galaxy Watch 4.",
    price: 279.00,
    image: "https://www.gigantti.fi/image/dv_web_D180001002803112/333824/samsung-galaxy-watch4-classic-46mm-bt-alykello-musta--pdp_zoom-3000--pdp_main-960.jpg",
    category: "Watches",
  },
  {
    id: 11,
    name: "Dell XPS 13",
    description: "Experience unparalleled performance with the Dell XPS 13 laptop.",
    price: 1199.99,
    image: "https://cdn.verk.net/kuvastin/w:1125/h:703/rt:fit/q:80/sh:0.5/plain/images/56/2_889714-3323x1915.jpeg",
    category: "Laptops",
  },
  {
    id: 12,
    name: "Google Pixel 6",
    description: "Capture stunning photos and enjoy the latest Android experience with Google Pixel 6.",
    price: 699.00,
    image: "https://www.gigantti.fi/image/dv_web_D1800010021258952/525084/google-pixel-6a-alypuhelin-6128-gb-chalk--pdp_zoom-3000--pdp_main-960.jpg",
    category: "Phones",
  },
  {
    id: 13,
    name: "Bose QuietComfort Earbuds",
    description: "Enjoy premium sound quality and noise cancellation with Bose QuietComfort Earbuds.",
    price: 279.95,
    image: "https://www.gigantti.fi/image/dv_web_D1800010021121313/509455/bose-quietcomfort-earbuds-ii-taysin-langattomat-in-ear-kuulokkeet-m--pdp_zoom-3000--pdp_main-960.jpg",
    category: "Headphones",
  },
  {
    id: 14,
    name: "Garmin Forerunner 945",
    description: "Track your runs and monitor your health with the Garmin Forerunner 945 GPS smartwatch.",
    price: 599.99,
    image: "https://cdn.verk.net/kuvastin/w:1125/h:703/rt:fit/q:80/sh:0.5/plain/images/3/2_607216-426x520.jpeg",
    category: "Watches",
  },
  {
    id: 15,
    name: "HP Spectre x360",
    description: "Experience versatility and power with the HP Spectre x360 convertible laptop.",
    price: 1299.99,
    image: "https://www.gigantti.fi/image/dv_web_D1800010021071585/462742/hp-spectre-x360-i7-12161024a370-16-2-in-1-kannettava--pdp_zoom-3000--pdp_main-960.jpg",
    category: "Laptops",
  },
  {
    id: 16,
    name: "Sony PlayStation 5",
    description: "Experience next-gen gaming with the powerful Sony PlayStation 5 console.",
    price: 499.99,
    image: "https://www.gigantti.fi/image/dv_web_D1800010021745670/716233/playstation-5-slim-digital-edition-2023-pelikonsoli--pdp_zoom-3000--pdp_main-960.jpg",
    category: "Gaming Consoles",
  },
  {
    id: 17,
    name: "Canon EOS R5",
    description: "Capture stunning photos and videos with the high-end Canon EOS R5 mirrorless camera.",
    price: 3799.00,
    image: "https://www.scandinavianphoto.fi/globalassets/1048664_1.jpg?ref=3E5370D1CD&w=960&h=960&mode=max",
    category: "Cameras",
  },
  {
    id: 18,
    name: "LG OLED C1 Series 4K TV",
    description: "Immerse yourself in stunning visuals with the LG OLED C1 Series 4K Smart TV.",
    price: 1499.99,
    image: "https://www.gigantti.fi/image/dv_web_D1800010021660632/618558/lg-55-ur73-4k-led-tv-2023--pdp_zoom-3000--pdp_main-960.jpg",
    category: "TVs",
  },
  {
    id: 19,
    name: "DJI Mavic Air 2",
    description: "Capture breathtaking aerial footage with the DJI Mavic Air 2 drone.",
    price: 799.00,
    image: "https://static.elisa.com/v2/image/2tqybbhjs47b/57HGjI3Mz0h82UDGmRAsDo/Mavic+Air+2+-drone.jpeg?w=800&fm=avif&env=master&q=90",
    category: "Drones",
  },
  {
    id: 20,
    name: "Nintendo Switch",
    description: "Enjoy gaming on the go with the versatile Nintendo Switch gaming console.",
    price: 299.99,
    image: "https://creativehub.teliacompany.com/transform/5ebf392d-34f0-4194-a6e3-adff971a85ef/9112334-4y3VirzRTyKo3mHsIbTgJF?io=transform:fill,width:500&quality=95",
    category: "Gaming Consoles",
  },
];

const MainPage = () => {
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
    
    const isProductInCart = cart.some(item => item.id === productId)

    if (isProductInCart) {
      alert("This product is already in your cart!");
    } else {
      setCart(prevCart => [...prevCart, selectedProduct])
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <Container>
      <Sidebar 
      />
      <Nav 
        calculateCartTotal={calculateCartTotal}
        cart={cart}
        setCart={setCart} 
        />

      <div className={styles['productsHeading']}>
        <h1>Products</h1>
      </div>

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
    </Container>
  );
};

export default MainPage;