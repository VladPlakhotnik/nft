import React, { useState } from 'react'
import { BoxContainer, Container, ButtonOpen, Wallet } from './Modal.styles'
import Modal from '@mui/material/Modal'
import { BasicModalType } from './Modal.types'
import { Flexbox } from 'src/common/lib/Flexbox'

export const BasicModal: React.FC<BasicModalType> = ({ name }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <ButtonOpen onClick={handleOpen}>{name}</ButtonOpen>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <BoxContainer>
          <Flexbox direction='column' justify='center'>
            <Container>
              <span>CHOOSE WALLET</span>
              <Wallet>Metamask</Wallet>
              <Wallet>WalletConnect (Beta)</Wallet>
              <Wallet>WalletLink (Beta)</Wallet>
            </Container>
          </Flexbox>
        </BoxContainer>
      </Modal>
    </div>
  )
}
