import { Imagem, Titulo, Preco } from './styles'

import bannerImagem from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {

  return(
    <Imagem style={{backgroundImage: `url(${bannerImagem})`}}>
      <div className='container'>
        <Tag size='big'>Destaque do dia</Tag>
        <div>
          <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Preco>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Preco>
        </div>
        <Button type='link' to='/produtos' title='Clique aqui para aproveitar essa oferta'>Aproveitar</Button>
      </div>
    </Imagem>
  )
}

export default Banner
