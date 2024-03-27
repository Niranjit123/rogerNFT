import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './Hero.css';

export default function Hero() {

  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
  };

  const externalURL = 'https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x31a90B65019C1207826a5e1e54C35245907aF973&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=de741b5f9367218762890d0620ee6d9a&theme=light&primaryColor=purple';

  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="svg-wrapper-top svg-left-top">
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-top svg-right-top">
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-bottom svg-left-bottom">
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-bottom svg-right-bottom">
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="content">
          <h1>collect & sell<br /><span>super rare roger nfts</span></h1>

          <div className="container panel">
            <div className="row">
              <div className="col">
                <img className="img secondary-image" src={require('../images/459.jpg')} alt="01" />
              </div>
              <div className="col">
                <img className="img tertiary-image" src={require('../images/440.jpg')} alt="02" />
                <img className="img tertiary-image" src={require('../images/375.jpg')} alt="03" />
              </div>
              <div className="col">
              <botton onClick={()=>handleExternalLinkClick(externalURL)} className='mint-now'>Mint Now</botton>

                <img className="img main-image" src={require('../images/368.jpg')} alt="04" />
              </div>
              <div className="col">
                <img className="img tertiary-image" src={require('../images/367.jpg')} alt="05" />
                <img className="img tertiary-image" src={require('../images/461.jpg')} alt="06" />
              </div>
              <div className="col">
                <img className="img secondary-image" src={require('../images/479.jpg')} alt="07" />
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};
