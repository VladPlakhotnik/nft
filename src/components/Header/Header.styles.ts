import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const Flexbox = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
` 
export const ContainerUl = styled.ul`
    display: flex;
    width: 35%;
    justify-content: space-around;
`
export const NavLink = styled(NavLinkRouter)`
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: rgb(230,226,224);
    color: rgb(38,38,38);
    border-radius: 0.4rem;
    &:hover {
        background-color: rgb(211,207,204);
    }
`
export const Logo = styled(NavLinkRouter)`
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: rgb(194,53,66);
    border-radius: 0.4rem;
    color: rgb(255,255,255);
`