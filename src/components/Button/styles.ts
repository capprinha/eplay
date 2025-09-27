import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
