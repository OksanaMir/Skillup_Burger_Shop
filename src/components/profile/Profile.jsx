import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';

const Profile = props => {
	const options = {
		initial: {
			y: '-100%',
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		}
	};

	const history = useNavigate();
	const logoutHandler = () => {
		props.setAuthenticated(false);
		history('/login');
	};

	return (
		<section className="profile">
			<main>
				<motion.img src={me} alt="User" {...options} />
				<motion.h5 {...options} transition={{ delay: 0.3 }}>
					Nelson
				</motion.h5>
				<MdDashboard />

				<motion.div
					initial={{
						x: '-100vw',
						opacity: 0
					}}
					animate={{
						x: 0,
						opacity: 1
					}}
				>
					<Link to="/myorders">Orders</Link>
				</motion.div>

				<motion.button
					initial={{
						x: '-100vw',
						opacity: 0
					}}
					animate={{
						x: 0,
						opacity: 1
					}}
					transition={{
						delay: 0.3
					}}
					onClick={logoutHandler}
				>
					Logout
				</motion.button>
			</main>
		</section>
	);
};

export default Profile;
