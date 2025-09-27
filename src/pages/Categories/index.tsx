import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductsList
          games={fightGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
