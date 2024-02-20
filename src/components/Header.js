//components.Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const handleDropdownToggle = (dropdown) => {
      setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  const isDropdownActive = (dropdown) => {
      return activeDropdown === dropdown ? 'open' : '';
  };
 

  return (
    <header className="header">
      <nav className="navigation">
      <div className="logo">
        <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/4a536633-277c-4c83-afa7-586bfcce7dd0-1617121306276.png" alt="Bosta Logo" />
      </div>
        <ul>
        <li className={`dropdown ${isDropdownActive('products')}`} onMouseEnter={() => handleDropdownToggle('products')} onMouseLeave={() => handleDropdownToggle('products')}>
                        <Link to="#">Products <i className={`fas ${isDropdownActive('products') ? 'fa-chevron-right' : 'fa-chevron-down'}`}></i></Link>
                        <div className={`dropdown-content ${isDropdownActive('products')}`} onMouseLeave={() => handleDropdownToggle('')}>
                            <Link to="#">Solutions</Link>
                            <Link to="#">Dashboard</Link>
                            <Link to="#">Mobile App</Link>
                        </div>
                    </li>
          <li className={`dropdown ${isDropdownActive('integrations')}`} onMouseEnter={() => handleDropdownToggle('integrations')} onMouseLeave={() => handleDropdownToggle('integrations')}>
            <Link to="#">Integrations <i className={`fas ${isDropdownActive('integrations') ? 'fa-chevron-right' : 'fa-chevron-down'}`}></i></Link>
            <div className={`dropdown-content ${isDropdownActive('integrations')}`} onMouseLeave={() => handleDropdownToggle('')}>
              <Link to="#">Shopify</Link>
              <Link to="#">WooCommerce</Link>
              <Link to="#">Custom APIs</Link>
            </div>
          </li>
          <li className={`dropdown ${isDropdownActive('usecases')}`} onMouseEnter={() => handleDropdownToggle('usecases')} onMouseLeave={() => handleDropdownToggle('usecases')}>
            <Link to="#">Use Cases <i className={`fas ${isDropdownActive('usecases') ? 'fa-chevron-right' : 'fa-chevron-down'}`}></i></Link>
            <div className={`dropdown-content ${isDropdownActive('usecases')}`} onMouseLeave={() => handleDropdownToggle('')}>
              <Link to="#">Business</Link>
              <Link to="#">SMEs</Link>
            </div>
          </li>
          <li className="track-shipment"><Link to="/track">Track Shipment</Link></li>
          <li><Link to="#">Pricing</Link></li>
          <li><Link to="#">Blog</Link></li>
          <li className={`dropdown ${isDropdownActive('language')}`} onMouseEnter={() => handleDropdownToggle('language')} onMouseLeave={() => handleDropdownToggle('language')}>
            <Link to="#">En <i className={`fas ${isDropdownActive('language') ? 'fa-chevron-right' : 'fa-chevron-down'}`}></i></Link>
            <div className={`dropdown-content ${isDropdownActive('language')}`} onMouseLeave={() => handleDropdownToggle('language')}>
              <Link to="#">English</Link>
              <Link to="#">Arabic</Link>
            </div>
          </li>
          <li><Link to="#">Sign in</Link></li>
          <li><Link to="#">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
