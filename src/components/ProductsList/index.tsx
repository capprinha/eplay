import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading?: boolean
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTag = (game: Game) => {
    const tags: any[] = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    ;<>
      <Loader />
    </>
  } else {
    return (
      <Container id={id} background={background}>
        <div className="container">
          <Title>{title}</Title>
          <List>
            {games &&
              games.map((game) => (
                <li key={game.id}>
                  <Product
                    id={game.id}
                    category={game.details.category}
                    description={game.description}
                    image={game.media.thumbnail}
                    infos={getGameTag(game)}
                    system={game.details.system}
                    title={game.name}
                  />
                </li>
              ))}
          </List>
        </div>
      </Container>
    )
  }
}

export default ProductsList
