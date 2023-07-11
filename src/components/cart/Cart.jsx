import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const cartItemsList = [
	{ title: 'Cheese Burger', img: burger1, price: 200 },
	{ title: 'Veg Cheese Burger', img: burger2, price: 500 },
	{
		title: 'Cheese Burger With French Fries',
		img: burger3,
		price: 800
	}
];

const CartItem = ({ value, title, img, increment, decrement }) => (
	<div className="cartItem">
		<div>
			<h4>{title}</h4>
			<img src={img} alt="Item" />
		</div>

		<div>
			<button onClick={decrement}>-</button>
			<input type="number" readOnly value={value} />
			<button onClick={increment}>+</button>
		</div>
	</div>
);

const Cart = () => {
	const [inCartValue, setInCartValue] = useState([0, 0, 0]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [shipPrice, setShipPrice] = useState(0);

	const increment = item => {
		const prevState = [...inCartValue];
		const prevTotalPrice = totalPrice;
		prevState[item]++;
		setInCartValue(prevState);
		setTotalPrice(prevTotalPrice + cartItemsList[item].price);
		setShipPrice(200);
	};

	const decrement = item => {
		const prevState = [...inCartValue];
		const prevTotalPrice = totalPrice;
		if (prevState[item] > 0) {
			prevState[item]--;
			setInCartValue(prevState);
			setTotalPrice(prevTotalPrice - cartItemsList[item].price);
		}
		if (totalPrice === 0) {
			setShipPrice(0);
		}
	};

	return (
		<section className="cart">
			<main>
				{cartItemsList.map((item, i) => (
					<CartItem
						key={i}
						title={item.title}
						img={item.img}
						value={inCartValue[i]}
						increment={() => increment(i)}
						decrement={() => decrement(i)}
					/>
				))}

				<article>
					<div>
						<h4>Sub Total</h4>
						<p>₹{totalPrice}</p>
					</div>
					<div>
						<h4>Tax</h4>
						<p>₹{totalPrice * 0.18}</p>
					</div>
					<div>
						<h4>Shipping Charges</h4>
						<p>₹{shipPrice}</p>
					</div>
					<div>
						<h4>Total</h4>
						<p>₹{totalPrice + totalPrice * 0.18 + shipPrice}</p>
					</div>
					<Link to="/shipping">Checkout</Link>
				</article>
			</main>
		</section>
	);
};

export default Cart;
