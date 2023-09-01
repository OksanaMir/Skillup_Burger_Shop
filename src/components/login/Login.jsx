import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	MDBContainer,
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
	MDBBtn,
	MDBIcon,
	MDBInput,
	MDBCheckbox
} from 'mdb-react-ui-kit';

function Login(props) {
	const [justifyActive, setJustifyActive] = useState('tab1');
	const [login, setLogin] = useState(undefined);
	const [password, setPassword] = useState(undefined);

	const icons = ['facebook-f', 'twitter', 'google', 'github'];
	const history = useNavigate();

	const user = {
		email: 'user1@getDefaultNormalizer.com',
		password: '123abc'
	};

	let inputs;
	if (justifyActive === 'tab1') {
		inputs = [
			{ label: 'Email address', type: 'email' },
			{ label: 'Password', type: 'password' }
		];
	} else if (justifyActive === 'tab2') {
		inputs = [
			{ label: 'Name', type: 'text' },
			{ label: 'Username', type: 'text' },
			{ label: 'Email', type: 'email' },
			{ label: 'Password', type: 'password' }
		];
	}
	let tabs = [
		{ tab: 'tab1', text: 'Login ' },
		{ tab: 'tab2', text: ' Register' }
	];

	useEffect(() => {
		props.setAuthenticated(false);
	}, []);

	const handleJustifyClick = value => {
		if (value === justifyActive) {
			return;
		}
		setJustifyActive(value);
	};

	const handleLogin = (iType, v) => {
		if (iType === 'email') {
			setLogin(v);
			console.log(iType, v);
		} else if (iType === 'password') {
			setPassword(v);
			console.log(iType, v);
		} else {
			console.log(iType, v, 'no');
		}
	};

	const confirmForm = () => {
		if (login === user.email && password === user.password) {
			props.setAuthenticated(true);

			history('/me');
		} else {
			console.log('Incorrect login or password. Try again');
		}
	};

	return (
		<MDBContainer className="p-3 my-5 d-flex flex-column w-50">
			<MDBTabs
				pills
				justify
				className="mb-3 d-flex flex-row justify-content-between"
			>
				{tabs.map((t, i) => (
					<MDBTabsItem key={i}>
						<MDBTabsLink
							onClick={() => handleJustifyClick(t.tab)}
							active={justifyActive === t.tab}
						>
							{t.text}
						</MDBTabsLink>
					</MDBTabsItem>
				))}
			</MDBTabs>
			<MDBTabsContent>
				<MDBTabsPane show={justifyActive === 'tab1'}>
					<form onSubmit={confirmForm}>
						<div className="text-center mb-3">
							<p>Sign in with:</p>
							<div
								className="d-flex justify-content-between mx-auto"
								style={{ width: '40%' }}
							>
								{icons.map((ic, i) => (
									<MDBBtn
										key={i}
										tag="a"
										color="none"
										className="m-1"
										style={{ color: '#1266f1' }}
									>
										<MDBIcon fab icon={ic} size="sm" />
									</MDBBtn>
								))}
							</div>
							<p className="text-center mt-3">or:</p>
						</div>
						{inputs.map((input, i) => (
							<MDBInput
								key={i}
								wrapperClass="mb-4"
								label={input.label}
								id={i}
								type={input.type}
								className="form-control"
								onChange={e =>
									handleLogin(input.type, e.target.value)
								}
							/>
						))}
						<div className="d-flex justify-content-between mx-4 mb-4">
							<MDBCheckbox
								name="flexCheck"
								value=""
								id="flexCheckDefault"
								label="Remember me"
							/>
							<a href="!#">Forgot password?</a>
						</div>
						<MDBBtn className="mb-4 w-100" type="submit">
							Sign in
						</MDBBtn>
						<p className="text-center">
							Not a member?
							<a
								href="#!"
								onClick={() => {
									setJustifyActive('tab2');
								}}
							>
								Register
							</a>
						</p>
					</form>
				</MDBTabsPane>
				<MDBTabsPane show={justifyActive === 'tab2'}>
					<div className="text-center mb-3">
						<p>Sign up with:</p>
						<div
							className="d-flex justify-content-between mx-auto"
							style={{ width: '40%' }}
						>
							{icons.map((ic, i) => (
								<MDBBtn
									key={i}
									tag="a"
									color="none"
									className="m-1"
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon={ic} size="sm" />
								</MDBBtn>
							))}
						</div>
						<p className="text-center mt-3">or:</p>
					</div>
					{inputs.map((input, i) => (
						<MDBInput
							key={i}
							wrapperClass="mb-4"
							label={input.label}
							id={i}
							type={input.type}
							className="form-control"
							required
						/>
					))}
					<div className="d-flex justify-content-center mb-4">
						<MDBCheckbox
							name="flexCheck"
							id="flexCheckDefault"
							label="I have read and agree to the terms"
						/>
					</div>
					<MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
				</MDBTabsPane>
			</MDBTabsContent>
		</MDBContainer>
	);
}
export default Login;
