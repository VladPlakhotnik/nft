import styled from 'styled-components'
import Box from '@mui/material/Box'

export const BoxContainer = styled(Box)`
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  background-color: rgb(192, 53, 64);
`
export const Container = styled.div`
  padding: 1rem;
`
export const ButtonOpen = styled.div`
  padding: 0.5rem 1rem;
  background-color: rgba(230, 226, 224, 0.2);
  color: rgb(255, 255, 255);
  border: 2px solid #fff;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(230, 226, 224, 0.5);
  }
`
export const Wallet = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid #000;
  background-color: rgb(198, 74, 83);
  &:hover {
    cursor: pointer;
    background-color: rgba(230, 226, 224, 0.5);
  }
`
