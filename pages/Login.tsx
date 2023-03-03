// import React from 'react';
import Input from "../components/input/Input";
import { LoginProps } from "../components/LoginProps";
import Button from "../components/button/Button";
// import "../app/login/Login.css";
// import { useNavigate } from 'react-router-dom';
// import "./components/login/LoginForm.css";
import React, {  useEffect } from 'react';

function LoginForm( ) {
	// let navigate = useNavigate();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	// const [count, setCount] = React.useState(0);
	// const decrementCount = () => {
	// 	setCount(count - 1);
	// }
	// const incrementCount = () => {
	// 	setCount(count + 1);
	// }
	const submitHandler = (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();
	}
	const [resource, setResource] = React.useState('posts');
	console.log('renderbefore')
useEffect(() => {
	console.log('render')
},[resource])

	return (
		<form onSubmit={submitHandler}>
			<div className="form-inner space-y-4 md:space-y-6"  >
			
				<h2>Login</h2>
				<Input
					className=""
					htmlFor={"email"}
					label={"EmailID"}
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email"
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
				<Input
					className=""
					htmlFor={"password"}
					label={"Password"}
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
				
				{/* <a href="/User" rel="noopener noreferrer"> */}
            <Button 
					label={"Login"}
				/>
          {/* </a> */}
				{/* <div>
				<Button onClick={decrementCount} label="-" />
				<span>{count}</span>
				<Button onClick={incrementCount} label="+" /> */}
				{/* <div>
					<Button onClick={() => setResource('Posts')} label="Posts" />
						<Button onClick={() => setResource('Users')} label="Users" />
						<Button onClick={() => setResource('Comments')} label="Comments" />
				</div> */}
				</div>
			{/* <h2>{resource}</h2> */}
			
		</form>
	)
}

export default LoginForm;