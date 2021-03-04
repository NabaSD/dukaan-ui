import React from 'react';
import './Home.scss';
import Header from '../../components/header/Header';
import StoreHeader from '../../components/store-header/Store-header';
import SearchBox from '../../components/search-box/Search-box';
import BestsellersContainer from '../../components/bestsellers/Bestsellers-container.component';
import ProductListContainer from '../../components/product-list/Product-list-container';
import NavContainer from '../../components/navbar/Nav-container';
import FooterContainer from '../../components/footer/Footer-container';

function Home() {
  return (
    <div className="outer-container">
      <Header />
      <div className="content-container">
        <StoreHeader />
        <SearchBox />
        <div className="hr-line"></div>
        <BestsellersContainer />
        <ProductListContainer />
        <FooterContainer/>
      </div>
      <NavContainer/>
    </div>
  );
}

export default Home;
