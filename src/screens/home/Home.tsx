import React from 'react';
import './Home.scss';
import Header from '../../components/header/Header';
import StoreHeader from '../../components/store-header/Store-header';
import SearchBox from '../../components/search-box/Search-box';

function Home() {
  return (
    <div className="outer-container">
      <Header />
      <StoreHeader />
      <SearchBox />
      <div className="hr-line"></div>
    </div>
  );
}

export default Home;
