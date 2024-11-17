import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assests/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className="navigation">
				<Link className="nav-link">
					<CrwLogo className="logo-container" to="/">
						Logo
					</CrwLogo>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGNOUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CardDropDown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
