import { Imagem, Titulo, Preco } from './styles'

import bannerImagem from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {

  return(
    <Imagem style={{backgroundImage: `url(${bannerImagem})`}}>
      <div className='container'>
        <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Preco>
      </div>
    </Imagem>
  )
}

export default Banner
