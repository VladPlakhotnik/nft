import styled from "styled-components";

export const FlexboxAround = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
` 
export const UlFlex = styled.ul`
    display: flex;
    width: 40%;
    justify-content: space-around;
`
export const BorderLi = styled.li`
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: rgb(230,226,224);
    border-radius: 0.4rem;
    &:hover {
        cursor: pointer;
        background-color: rgb(211,207,204);
    }
`
export const BorderDiv = styled.div`
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: rgb(230,226,224);
    border-radius: 0.4rem;
    &:hover {
        cursor: pointer;
        background-color: rgb(211,207,204);
    }
`
export const Link = styled.a`
    color: rgb(0,0,0);
    font-weight: 500;
`
export const LinkLogo = styled.a`
    color: #fff;
    font-weight: 700;
`
export const LogoDiv = styled.div`
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: rgb(194,53,66);
    border-radius: 0.4rem;
`