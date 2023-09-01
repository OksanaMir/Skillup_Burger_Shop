import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/DropdownMenu.scss';
import '../../styles/colors.scss';

const DropdownMenu = props => {
	const [navLinks, setNavLinks] = useState([]);

	useEffect(() => {
		const navs = [
			{ name: 'Login', path: '/login' },
			{ name: 'Orders', path: '/myorders' },
			{ name: 'Logout', path: '/login' }
		];
		setNavLinks(navs);
	}, []);

	const showNav = navName => {
		if (
			(navName === 'Login' && props.toShow === false) ||
			(navName === 'Orders' && props.toShow === true) ||
			(navName === 'Logout' && props.toShow === true)
		) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-dark bg-primary p-O"
				// data-bs-toggle="offcanvas"
			>
				<div className="container">
					{/* <a className="navbar-brand" href="#">
				
					</a> */}
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-bs-toggle="dropdown"
							data-bs-display="static"
							aria-expanded="false"
						>
							Menu
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{navLinks.map((d, i) => (
								<li key={i}>
									{showNav(d.name) && (
										<Link to={d.path}>
											<button
												className="dropdown-item"
												type="button"
											>
												{d.name}
											</button>
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default DropdownMenu;