import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`

const Nav = () => {
    return (
        <Container>
            <Icon icon={`mdi-light:email`} style={{ fontSize: '27px', color: 'yourColor' }} />
            <ProfileImg src={require('../../assets/no-profile-picture-15257.png')} />
        </Container>
    )
}

export default Nav;
