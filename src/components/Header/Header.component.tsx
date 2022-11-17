import React from 'react'
import { Flexbox, ContainerUl, Logo, NavLink } from './Header.styles'

export const Header:React.FC = () => {
  return (
    <Flexbox>  
        <Logo to="/">BAZUKI</Logo>
        <ContainerUl>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/world">WORLD</NavLink>
            <NavLink to="/mindmap">MINDMAP</NavLink>
            <NavLink to="/">TWITTER</NavLink>
            <NavLink to="/">DISCORD</NavLink>
            <NavLink to="/">LANG</NavLink>
            <NavLink to="/">CONNECT WALLET</NavLink>
        </ContainerUl>
    </Flexbox>
  );
}
