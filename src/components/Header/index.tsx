import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { open } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'

import * as S from './styles'

import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="Eplay" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link title='Clique aqui para acessar a pagina de categorias' to="/categorias">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title='Clique aqui para acessar a seção de em breve' to="/#coming-soon">Em breve</HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title='Clique aqui para acessar a seção de promoções' to="/#on-sale">Promoções</HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link onClick={() => setIsMenuOpen(false)} to="/categorias">Categorias</Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a seção de em breve' to="/#coming-soon">Em breve</HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a seção de promoções' to="/#on-sale">Promoções</HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
