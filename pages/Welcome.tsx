
import { Button } from "../components/button/Button";
import React, {  useEffect } from 'react';
import CreateProduct from "./CreateProduct";
import Navbar from "../components/Navbar"
import Link from "next/link";


function Welcome (){
const [resource, setResource] = React.useState('CreateProduct');
	console.log('renderbefore')
useEffect(() => {
	console.log('render')
},[resource])


return (

<div className='flex min-h-screen max-h-screen '>
	<div className=' w-1/5'> <Navbar /></div>
	<div className=' w-4/5  bg-slate-700 h-screen '>
		<h1 className="text-white m-5">Welcome Message</h1>
	</div>
</div>
  
)
}
export default Welcome;