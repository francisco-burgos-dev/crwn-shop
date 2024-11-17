import "./cart-item.styles.scss";

import React from "react";

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x ${price}
				</span>
			</div>
			<span>{quantity}</span>
		</div>
	);
};

export default CartItem;
