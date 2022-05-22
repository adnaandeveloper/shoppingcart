import React from 'react';
import './App.css';
import { ProductScreen, CartList } from './pages';
import { Routes, Route } from 'react-router-dom';
import { data } from './dummyData';
import { Header } from './components/header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductScreen data={data} />} />
        <Route path="cartlist" element={<CartList />} />
      </Routes>
    </>
  );
};

export default App;
