import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { login, logout } from "../../redux/user/slice";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

  const dispatch = useDispatch()

  const productsCount = useSelector(selectProductsCount)

  const handleLoginClick = () => {
    dispatch(login({ name: 'Júlio Nunes', email: 'julio@email.com' }))
  }

  const handleLogoutClick = () => {
    dispatch(logout())
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ?
          <div onClick={handleLogoutClick}>Sair</div>
          :
          <div onClick={handleLoginClick}>Login</div>
        }
        <div onClick={handleCartClick}>Carrinho </div>
        ({productsCount})
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
