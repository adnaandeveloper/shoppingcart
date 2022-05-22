import React, { useEffect } from 'react';
import './App.css';
import { ProductScreen, CartList } from './pages';
import { Routes, Route } from 'react-router-dom';
import { data } from './dummyData';
import { Header } from './components/header';
import { useStore } from './store';

const App = () => {
    const initialize = useStore((store) => store.initialize);

    useEffect(() => {
        initialize(data);
    }, [initialize]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ProductScreen />} />
                <Route path="cartlist" element={<CartList />} />
            </Routes>
        </>
    );
};

export default App;
