import styled from 'styled-components'

export const Flex = styled.div<{
  justify?: string
  direction?: string
  align?: string
  wrap?: string
}>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'stretch'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`
