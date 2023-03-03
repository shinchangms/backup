/**
 * CreateProduct is a component for creating a new Product
 * */
import React from 'react';
// import { CreateProductProps } from "../components/CreateProductProps";
import { CreateProductProps } from "../components/CreateProjectProps";
import Input1 from "../components/input1/Input1";

import Input from "../components/input/Input";
import Textarea from "../components/textarea/Textarea";
import { Button } from "../components/button/Button";
// import Input1Stories from '@/app/input1/Input1.stories';
// import "../components/product/CreateProduct.css";

import Navbar from "../components/Navbar"
function CreateProduct({ onCreateProductSubmit }: CreateProductProps) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [pick, setPick] = React.useState("");
  const [reed, setReed] = React.useState("");


  
  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    onCreateProductSubmit({ name, description, height, width, pick, reed });
  }
  return (
     <div className='  flex min-h-screen max-h-screen'>
      <div className=' w-1/5'> <Navbar /></div>

   
    <div className='  w-4/5  relative  bg-slate-800 h-screen '>
     
    <div className='  m-5 p-14 bg-teal-500 pb-14 b  rounded-lg  text-white w-fit   '>
    <form onSubmit={submitHandler}>
      <div className=" pb-16  rounded-lg border-2 border-slate-800 ">
       <h2 className="text-xl font-semibold p-5 bg-slate-900 uppercase rounded-t-lg ">Create New Product</h2>
      
        <div className="  mt-5 flex ">
       <div className='mx-10'>
        
        <span className='w-20'>
          <Input 
          className=""
          htmlFor={"name"}
          label={"Name"}
          type="text"
          name="name"
          id="firstname"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        </span>

        <Textarea
          rows={5}
          cols={38}
          value={name}
          onChange={e => setDescription(e.target.value)}
        />
       </div>
      <div className='flex flex-col'>
        <div className='flex flex-initial w-28'> 
        <span className='flex-initial w-28 mr-10 '>
          <Input 
          className=""
          htmlFor={"height"}
          label={"Height"}
          type="text"
          name="height"
          id="height"
          onChange={e => setHeight(e.target.value)}
          value={height }
        />
        </span>
         <span className='flex-initial w-28 mr-10 '>
           <Input
          className=""
          htmlFor={"width"}
          label={"Width"}
          type="text"
          name="width"
          id="width"
          onChange={e => setWidth(e.target.value)}
          value={width}
        />
       </span>
        </div>
       
      
        
          <div className='flex '>
         <span className='flex-initial w-28 mr-10 mt-10 '>
           <Input
          className=""
          htmlFor={"pick"}
          label={"Pick"}
          type="text"
          name="pick"
          id="pick"
          onChange={e => setPick(e.target.value)}
          value={pick}
        />
         </span>
          

         <span className='flex-initial w-28  mr-10 mt-10'>
        <Input
          className=""
          htmlFor={"reed"}
          label={"Reed"}
          type="text"
          name="reed"
          id="reed"
          onChange={e => setReed(e.target.value)}
          value={reed}
        />
        </span>
        </div>
        
     
        </div>

        </div>
        <Button
          className=" w-20  bg-slate-900 hover:bg-slate-900/60 hover:scale-110 transition ease-in-out text-white font-bold py-2 mx-10 rounded-lg float-right "
          label={"Create"} 
          />
      </div>
      
    </form>
    </div>
    </div>
    
    </div>
  );
}
export default CreateProduct;