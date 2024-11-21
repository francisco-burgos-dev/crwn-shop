import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assests/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
	NavigationContainer,
	NavLink,
	NavLinks,
	LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGNOUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CardDropDown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
