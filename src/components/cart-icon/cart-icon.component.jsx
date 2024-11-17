import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	console.log(isCartOpen);

	return (
		<div className="cart-icon-container" onClick={toggleIsCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;