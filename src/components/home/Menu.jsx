import React from 'react';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const Menu = () => {
	const addToCartHandler = itemNum => {};
    const menuCard = [
		{ src: burger1, price: 200, title: 'Cheese Burger', delay: 0.1 },
		{ src: burger2, price: 500, title: 'Veg Cheese Burger', delay: 0.5 },
		{
			src: burger3,
			price: 1800,
			title: 'Cheese Burger with French Fries',
			delay: 0.8
		}
	];
	return (
		<section id="menu">
			<h1>MENU</h1>
			<div>
				{' '}
				{menuCard.map((card, i) => (
					<>
						{' '}
						<MenuCard
							key={i}
							itemNum={i}
							burgerSrc={card.src}
							price={card.price}
							title={card.title}
							handler={addToCartHandler}
							delay={card.delay}
						/>
					</>
				))}
			</div>{' '}
		</section>
	);
};
export default Menu;
