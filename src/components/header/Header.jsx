import React from 'react';
import { Col, Menu, Row } from 'antd';
import CartBadge from '../CartBadge';
import { useStore } from '../../store';

const Header = () => {
    const totalProductsInCart = useStore((store) =>
        Object.values(store.cart).reduce((acc, curr) => acc + curr, 0)
    );

    return (
        <>
            <Menu
                mode="horizontal"
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Row>
                    <Col>
                        <Menu.Item key="mail" style={{ cursor: 'none' }}>
                            Navigation One
                        </Menu.Item>
                    </Col>
                    <Col>
                        <Menu.Item key="mail">
                            <CartBadge count={totalProductsInCart} />
                        </Menu.Item>
                    </Col>
                </Row>
            </Menu>
        </>
    );
};

export default Header;
