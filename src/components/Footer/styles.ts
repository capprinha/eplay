import styled from 'styled-components'
import { HashLink as RouterLink } from 'react-router-hash-link'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0px;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(RouterLink)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
