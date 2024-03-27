import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo_roger-removebg-preview.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
  };

  const externalURL = 'https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x31a90B65019C1207826a5e1e54C35245907aF973&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=de741b5f9367218762890d0620ee6d9a&theme=light&primaryColor=purple';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`Navbar${isSticky ? ' sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="Logo" className='navbar-brand'/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} id="navbarText" tabIndex="-1">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseMenu}></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link
                    onClick={()=>handleExternalLinkClick(externalURL)}
                    className="nav-link"
                  >
                    Mint
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    Team
                  </Link>
                </li>
               
              </ul>
              <div className="d-flex align-items-center ms-lg-4">
                <a href="https://twitter.com" className="btn">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://discord.com" className="btn">
                  <i className="bi bi-discord"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
