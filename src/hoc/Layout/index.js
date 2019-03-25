import React from 'react'

// STYLED-COMPONENTS
import { Container } from './style';

// CONTAINERS
import Dashboard from '../../containers/Dashboard'

const Layout = () => {
  return (
    <Container>
      <Dashboard />
    </Container>
  )
}

export default Layout