import styled from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'

export const FlexContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`
export const Container = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
`
export const NavLink = styled(NavLinkRouter)`
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: rgba(230, 226, 224, 0.2);
  color: rgb(255, 255, 255);
  border-radius: 0.4rem;
  margin-right: 1rem;
  &.active {
    color: rgb(194, 53, 66);
  }
  &:hover {
    background-color: rgba(230, 226, 224, 0.5);
  }
`
export const Logo = styled(NavLinkRouter)`
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: rgb(194, 53, 66);
  border-radius: 0.4rem;
  color: rgb(255, 255, 255);
`
export const Button = styled.div`
  margin: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: rgba(230, 226, 224, 0.2);
  color: rgb(255, 255, 255);
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    background-color: rgba(230, 226, 224, 0.5);
  }
  &:active {
    color: rgb(194, 53, 66);
  }
`
