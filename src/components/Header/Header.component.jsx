import React from 'react'
import { FlexboxAround, UlFlex, BorderLi, BorderDiv, Link, LogoDiv, LinkLogo } from './Header.styles'

export const Header = () => {
  return (
    <FlexboxAround>  
        <LogoDiv><LinkLogo href="/">AZUKI</LinkLogo></LogoDiv>
        <UlFlex>
            <BorderLi><Link href="/">GALLERY</Link></BorderLi>
            <BorderLi><Link href="/">WORLD</Link></BorderLi>
            <BorderLi><Link href="/">MORE</Link></BorderLi>
            <BorderLi><Link href="/">BUY</Link></BorderLi>
            <BorderLi><Link href="/">TWITTER</Link></BorderLi>
            <BorderLi><Link href="/">DISCORD</Link></BorderLi>
            <BorderDiv><Link href="/">LANG</Link></BorderDiv>
            <BorderDiv><Link href="/">CONNECT WALLET</Link></BorderDiv>
        </UlFlex>
    </FlexboxAround>
  );
}
