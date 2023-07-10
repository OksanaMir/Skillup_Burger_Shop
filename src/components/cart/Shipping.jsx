import React, { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Shipping = () => {
	const [code, setCode] = useState('');
	const [city, setCity] = useState('');

	// useEffect(() => {
	let allCounrties = Country.getAllCountries();
	// }, []);

	// const countriesByCity = allCounrties.filter(myFunction);
	// if country is chosen

	// function myFunction(value, index, array) {
	// 	return (value = city);
	// }
	// console.log(allcitiesInCountry);

	let provinces;
	if (code === '') {
		provinces = State.getAllStates();
	} else {
		provinces = State.getStatesOfCountry(code);
	}

	return (
		<section className="shipping">
			<main>
				<h1>Shipping Details</h1>
				<form>
					<div>
						<label>H.No.</label>
						<input type="text" placeholder="Enter House No." />
					</div>
					<div>
						<label>City</label>
						<input
							type="text"
							placeholder="Enter City"
							onChange={e => {
								setCity(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>Country</label>
						<select
							id="countries"
							required
							onChange={e => {
								setCode(e.target.value);
							}}
						>
							<option value="selected disabled hidden">
								Country
							</option>
							{allCounrties.map((c, i) => (
								<option key={i} value={c.isoCode}>
									{c.name}
								</option>
							))}
						</select>
					</div>
					<div>
						<label>State</label>
						<select required>
							<option value="selected disabled hidden">
								State
							</option>
							{provinces.map((s, i) => (
								<option key={i} value={s.isoCode}>
									{s.name}
								</option>
							))}
						</select>
					</div>
					<div>
						<label>Pin Code</label>
						<input type="number" placeholder="Enter Pincode" />
					</div>
					<div>
						<label>Phone No.</label>
						<input type="tel" placeholder="Enter Phone No." />
					</div>

					{/* <Popup
						trigger={<button type="button">Confirm Order</button>}
						position="right center"
					> */}
					<Popup
						trigger={
							<Link className="link" to="/MyOrders">
								Confirm Order
							</Link>
						}
					>
						<div
							style={{
								color: 'red',
								transform: 'translate(0%,-500%)',
								backgroundColor: '#fff',
								padding: '10px',
								borderRadius: '5px',
								boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
							}}
						>
							Order Successfully Placed!
						</div>
					</Popup>
				</form>
			</main>
		</section>
	);
};

export default Shipping;
