import Tag from "../Tag"
import { Card ,Descricao, Titulo, Info } from './styles'

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[]
  image: string
  id: number
}

const Product = ({category, description, image, infos, system, title, id}:Props) => {

  const getDescrisao = (descrisao: string) => {
    if(descrisao.length > 95){
      return descrisao.slice(0, 92) + '...'
    }
    return descrisao
  }
  return(
    <Card to={`/product/${id}`}>
      <img src={image} alt="" />
      <Info>
        {infos.map(info => <Tag key={info}>{info}</Tag>)}
      </Info>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>
        {getDescrisao(description)}
      </Descricao>
    </Card>
  )
}

export default Product
