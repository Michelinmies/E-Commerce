import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import ShoppingCartButton from './ShoppingCartButton';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid #ccc
`

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`

const Nav = ({ calculateCartTotal, cart, setCart }) => {
    return (
        <Container>
            <Icon icon={`mdi-light:email`} style={{ fontSize: '27px', color: 'yourColor' }} />
            <ProfileImg src={require('../../assets/no-profile-picture-15257.png')} />
            <ShoppingCartButton 
                calculateCartTotal={calculateCartTotal} 
                cart={cart}
                setCart={setCart}
                />
        </Container>
    )
}

export default Nav;
