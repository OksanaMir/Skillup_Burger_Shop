import React from 'react';

const OrderDetails = () => {
	// There is a mock piece of data(orderedItems and orderSummary) for future data.
	const orderedItems = [
		{ name: 'Cheese Burger', price: 200, numberInCart: 1 },
		{ name: 'Veg Cheese Burger', price: 500, numberInCart: 2 },
		{ name: 'Burger Fries', price: 1800, numberInCart: 1 }
	];
	const tax = 'tax';
	const shipping = 'shipping';
	const orderSummary = [
		{
			detailCategory: 'Shipping',
			details: [{ dname: 'Address', description: 'sjda 12-32ss dsad' }]
		},
		{
			detailCategory: 'Contact',
			details: [
				{ dname: 'Name', description: 'Stuart' },
				{ dname: 'Phone', description: '2131232123' }
			]
		},
		{
			detailCategory: 'Status',
			details: [
				{ dname: 'Order Status', description: 'Processing' },
				{ dname: 'Placed At', description: '23-02-2002' },
				{ dname: 'Paid At', description: '23-02-2003' }
			]
		},
		{
			detailCategory: 'Payment',
			details: [
				{ dname: 'Payment Method', description: 'COD' },
				{ dname: 'Payment Reference', description: 'asdasdsadsad' },
				{ dname: 'Paid At', description: '23-02-2003' }
			]
		}
	];

	const extraToPay = name => {
		let extra;
		if (orderedItems.length === 0) {
			extra = 0;
		} else {
			if (name === tax) {
				extra = 0.18;
			} else if (name === shipping) {
				extra = 200;
			}
		}
		return extra;
	};

	let total;
	if (orderedItems.length > 0) {
		total = orderedItems
			.map(item => item.numberInCart * item.price)
			.reduce(calcTotal);
	} else {
		total = 0;
	}
	function calcTotal(total, value, index, array) {
		return total + value;
	}
	const lastDiv = {
		detailCategory: 'Amount',
		details: [
			{ dname: 'Items Total', description: `₹${total}` },
			{
				dname: 'Shipping Charges',
				description: `₹${extraToPay(shipping)}`
			},
			{ dname: 'Tax', description: `₹${total * extraToPay(tax)}` },
			{
				dname: 'Total Amount',
				description: `₹
            ${total * extraToPay(tax) + extraToPay(shipping) + total}`
			}
		]
	};
	orderSummary.push(lastDiv);

	return (
		<section className="orderDetails">
			<main>
				<h1>Order Details</h1>
				{orderSummary.map(item => (
					<div key={item.detailCategory}>
						<h1>{item.detailCategory}</h1>
						{item.details.map(d => (
							<p key={d.dname}>
								<b>{d.dname}</b>
								{d.description}
							</p>
						))}
					</div>
				))}
				<article>
					<h1>Ordered Items</h1>
					{orderedItems.map((item, i) => (
						<div key={i}>
							<h4>{item.name}</h4>
							<div>
								<span>{item.numberInCart}</span> x
								<span>{item.price}</span>
							</div>
						</div>
					))}
					<div>
						<h4 style={{ fontWeight: 800 }}>Sub Total </h4>
						<div
							style={{
								fontWeight: 800
							}}
						>
							₹{total}
						</div>
					</div>
				</article>
			</main>
		</section>
	);
};

export default OrderDetails;
