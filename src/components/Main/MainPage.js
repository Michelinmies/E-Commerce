import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import ProductList from '../Products/ProuctList'

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
`

const MainPage = () => {
  return (
    <Container>
      <Nav />
     <ProductList />
    </Container>
  )
}

export default MainPage
