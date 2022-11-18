import React from 'react'
import {
  FlexContainer,
  Logo,
  NavLink,
  Button,
  Container,
} from './Header.styles'
import TwitterIcon from '@material-ui/icons/Twitter'
import TranslateIcon from '@material-ui/icons/Translate'
import InstagramIcon from '@material-ui/icons/Instagram'
import { BasicModal } from '../Modal'

export const Header: React.FC = () => {
  return (
    <FlexContainer>
      <Logo to='/'>FENIXI</Logo>
      <Container>
        <NavLink to='/gallery'>GALLERY</NavLink>
        <NavLink to='/world'>WORLD</NavLink>
        <NavLink to='/mindmap'>MINDMAP</NavLink>
        <Button>
          <TwitterIcon style={{ fontSize: 17 }} />
        </Button>
        <Button>
          <InstagramIcon style={{ fontSize: 17 }} />
        </Button>
        <Button>
          <TranslateIcon style={{ fontSize: 17 }} />
        </Button>
        <BasicModal name='CONNECT WALLET' />
      </Container>
    </FlexContainer>
  )
}
