import Tag from "../Tag"
import { Card ,Descricao, Titulo, Info } from './styles'

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[]
  image: string
}

const Product = ({category, description, image, infos, system, title}:Props) => {

  return(
    <Card>
      <img src={image} alt="" />
      <Info>
        {infos.map(info => <Tag key={info}>{info}</Tag>)}
      </Info>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>
        {description}
      </Descricao>
    </Card>
  )
}

export default Product
