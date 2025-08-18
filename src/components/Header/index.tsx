import { Link } from "react-router-dom"
import { HeaderBar, Links, LinkItem, LinkCar } from "./styles"
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

const Header = () => {

  return(
    <HeaderBar>
      <div>
        <Link to='/'>
          <img src={logo} alt="Eplay" />
        </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categorias">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
      </div>
      <LinkCar href="#">
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </LinkCar>
    </HeaderBar>
  )
}

export default Header
