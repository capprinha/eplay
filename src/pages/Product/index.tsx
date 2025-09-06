import { useParams } from "react-router-dom"
import Hero from "../../components/Hero"
import Section from "../../components/Section"
import Gallery from "../../components/Gallery"

import resident from '../../assets/images/resident.png'
import { useEffect, useState } from "react"
import { Game } from "../Home"


const Product = () => {
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/eplay/jogos/${id}`)
    .then(res => res.json())
    .then(res => setGame(res))
  }, [id])

  const [ game, setGame] = useState<Game>()

  if(!game){
    return(
      <h3>Carregando...</h3>
    )
  }

  return(
    <div>
      <>
        <Hero game={game}/>
        <Section title="Sobre o jogo" background="black">
          <p>{game.description}</p>
        </Section>

        <Section title="Mais detalhes" background="gray">
          <p>
          <b>Plataforma:</b> {game.details.system}<br/>
          <b>Desenvolvedor:</b> {game.details.developer}<br/>
          <b>Editora:</b> {game.details.publisher}<br/>
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo {game.details.languages.join(', ')}
          </p>
        </Section>
        <Gallery defaultCover={game.media.cover} name={game.name} items={game.media.gallery}/>


      </>
    </div>
  )
}

export default Product
