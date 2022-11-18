import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../components/Header'
import { Container } from './Layout.styles'

export const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
