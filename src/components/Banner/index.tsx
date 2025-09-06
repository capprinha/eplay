import { useEffect, useState } from 'react'

import { Imagem, Titulo, Preco } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'

import { formataMoedas } from '../ProductsList'

const Banner = () => {

  const [ game, setGame ] = useState<Game>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
    .then(res => res.json())
    .then(res => setGame(res))
  }, [])

  if(!game){
    return (
      <h3>Carregando...</h3>
    )
  }
  return(
    <Imagem style={{backgroundImage: `url(${game.media.cover})`}}>
      <div className='container'>
        <Tag size='big'>Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preco>
            De <span>{formataMoedas(game.prices.old)}</span> <br />
            por apenas {formataMoedas(game.prices.current)}
          </Preco>
        </div>
        <Button variant='secondary' type='link' to={`/product/${game.id}`} title='Clique aqui para aproveitar essa oferta'>Aproveitar</Button>
      </div>
    </Imagem>
  )
}

export default Banner
