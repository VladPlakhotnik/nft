import React from 'react'
import { Flex } from './Flexbox.styles'
import { FlexboxType } from './Flexbox.types'

export const Flexbox: React.FC<FlexboxType> = props => {
  return <Flex {...props} />
}
