import React from 'react';
import { ProductList } from '../components';

import { useStore } from '../store';

const ProductScreen = () => {
    const products = useStore((store) => store.products);
    const incrementProduct = useStore((store) => store.incrementProduct);
    const decrementProduct = useStore((store) => store.decrementProduct);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductList
                data={products}
                incrementProduct={incrementProduct}
                decrementProduct={decrementProduct}
            />
        </div>
    );
};

export default ProductScreen;
