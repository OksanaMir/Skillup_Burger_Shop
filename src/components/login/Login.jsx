import React, { useState } from 'react';
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

function Login() {
	const [justifyActive, setJustifyActive] = useState('tab1');

	const icons = ['facebook-f', 'twitter', 'google', 'github'];

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

	const handleJustifyClick = value => {
		if (value === justifyActive) {
			return;
		}
		setJustifyActive(value);
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
				{/* <MDBTabsItem>
					{' '}
					<MDBTabsLink
						onClick={() => handleJustifyClick('tab1')}
						active={justifyActive === 'tab1'}
					>
						Login{' '}
					</MDBTabsLink>
				</MDBTabsItem>{' '}
				<MDBTabsItem>
					<MDBTabsLink
						onClick={() => handleJustifyClick('tab2')}
						active={justifyActive === 'tab2'}
					>
						{' '}
						Register
					</MDBTabsLink>{' '}
				</MDBTabsItem> */}
			</MDBTabs>
			<MDBTabsContent>
				<MDBTabsPane show={justifyActive === 'tab1'}>
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
						<p className="text-center mt-3">or:</p>{' '}
					</div>
					{inputs.map((input, i) => (
						<MDBInput
							key={i}
							wrapperClass="mb-4"
							label={input.label}
							id={i}
							type={input.type}
						/>
					))}
					<div className="d-flex justify-content-between mx-4 mb-4">
						{' '}
						<MDBCheckbox
							name="flexCheck"
							value=""
							id="flexCheckDefault"
							label="Remember me"
						/>
						<a href="!#">Forgot password?</a>{' '}
					</div>
					<MDBBtn className="mb-4 w-100">Sign in</MDBBtn>{' '}
					<p className="text-center">
						Not a member? <a href="#!">Register</a>{' '}
					</p>
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
						<p className="text-center mt-3">or:</p>{' '}
					</div>
					{inputs.map((input, i) => (
						<MDBInput
							key={i}
							wrapperClass="mb-4"
							label={input.label}
							id={i}
							type={input.type}
						/>
					))}
					<div className="d-flex justify-content-center mb-4">
						{' '}
						<MDBCheckbox
							name="flexCheck"
							id="flexCheckDefault"
							label="I have read and agree to the terms"
						/>{' '}
					</div>
					<MDBBtn className="mb-4 w-100">Sign up</MDBBtn>{' '}
				</MDBTabsPane>
			</MDBTabsContent>{' '}
		</MDBContainer>
	);
}
export default Login;
