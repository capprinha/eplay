import { PacmanLoader } from 'react-spinners'

import { cores } from '../../styles'

import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader color={cores.branca} />
    </Container>
  )
}

export default Loader
