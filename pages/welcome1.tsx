// import * as React from "react";
// import "../app/globals.css";
// import MyImage from "../images/displayImage.jpg";
// import "../images/displayImage.jpg";
import Input from "../components/input/Input";
import { LoginProps } from "../components/LoginProps";
import Button from "../components/button/Button";
import React, {  useEffect } from 'react';
function Welcome() {
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
    <div className="bg-slate-900 text-white min-h-screen max-h-screen top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="  m-20 mx-28 p-10 w-screen border rounded-2xl bg-teal-500 flex shadow-2xl ">
        <div className="  border-r-2 mr-5 w-2/3 p-2 flex justify-center items-center">
          <div className="text-9xl font-extrabold"> NOOL KANDU</div>
          {/* <img
            src="images/displayImage.jpg"
            height={300}
            width={200}
            alt="thread image"
          /> */}
        </div>
        <div className="w-1/3 h-128 rounded-lg bg-slate-900/75 flex flex-col items-center justify-center">
          <h1 className=" text-white text-2xl font-bold mb-4">Welcome Back!</h1>
          <form className="flex flex-col w-2/3">
            {/* <label className="mb-2 font-bold" htmlFor="email">
              Email
            </label> */}
            {/* <input
              className="border-2 text-black border-gray-300 p-2 mb-4 rounded-lg italic"
              type="email"
              name="email"
              placeholder="email-id"
              required
            /> */}
            
        <Input
					className=""
					htmlFor={"email"}
          label={"Email-Id"}
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
					value={email}
				/>
            <label className="mb-2 font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 text-black border-gray-300 p-2 mb-4 rounded-lg italic"
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <span className="text-sm"> 
              <input type="checkbox" /> Remember me
            </span>
            <span className=" text-right text-sm">
              <a href="">Forgot password?</a>
            </span>
             <a href="/User" rel="noopener noreferrer" className=" flex justify-center bg-teal-500 hover:bg-teal-200 text-black font-bold py-2 my-4 rounded-lg">
            <Button 
					className="	"
					label={"Login"}
				/>
          </a>
            
            {/* <button className="bg-teal-500 hover:bg-teal-200 text-black font-bold py-2 my-4 rounded-lg">
              Login
            </button> */}
            <span>
              <button className="pl-2 text-sm bg-white flex w-full justify-center hover:bg-teal-200 text-black font-bold py-2 my-4 rounded-lg">
                <span className="flex">
                  <img
                    className="pr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google logo"
                  />
                  <h5>Sign in with Google</h5>
                </span>
              </button>
            </span>

            <span className=" text-sm text-center">
              Dont have an account?{" "}
              <a href="" className=" font-bold">
                Sign up
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;