import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import About from './components/about/About';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/about.scss';
import './styles/DropdownMenu.scss';
import './styles/colors.scss';

function App() {
	const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
	const [counter, setCounter] = useState(null);
	const [itemsAdded, setItemsAdded] = useState([]);

	return (
		<Router>
			<Header
				isAuthenticated={isAuthenticatedUser}
				inCartNumber={counter}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							setCounter={setCounter}
							counter={counter}
							setItemsAdded={setItemsAdded}
							itemsAdded={itemsAdded}
						/>
					}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/cart"
					element={
						<Cart
						// items={itemsAdded}
						// setCounter={setCounter}
						// counter={counter}
						// setItemsAdded={setItemsAdded}
						/>
					}
				/>
				<Route path="/shipping" element={<Shipping />} />
				<Route
					path="/login"
					element={
						<Login setAuthenticated={setIsAuthenticatedUser} />
					}
				/>
				<Route
					path="/me"
					element={
						<Profile setAuthenticated={setIsAuthenticatedUser} />
					}
				/>
				<Route path="/MyOrders" element={<MyOrders />} />
				<Route path="/order/:id" element={<OrderDetails />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
