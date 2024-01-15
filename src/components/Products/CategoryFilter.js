import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ dropdownVisible, filterProductsByCategory, uniqueCategories, toggleDropdown }) => {
  return (
    <div>
      {/* Filter by Category Menu */}
      <div className={styles['dropdown']} onClick={toggleDropdown}>
        <button className={styles['dropbtn']}>Filter by Category</button>
        <div className={styles['dropdown-content']} style={{ display: dropdownVisible ? 'block' : 'none' }}>
          <li onClick={() => filterProductsByCategory(null)}>All</li>
          {uniqueCategories.map((category) => (
            <li key={category} onClick={() => filterProductsByCategory(category)}>
              {category}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
