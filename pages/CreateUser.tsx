/**
 * CreateProject is a component for creating a new component
 * */
import React from 'react';
import { UserProps } from "../components/UserProps";
import Input1 from "../components/input1/Input1";
// import Textarea from "../app/textarea/Textarea";
import { Button } from "../components/button/Button";
// import "../components/usermodule/User.css";
import Navbar from "../components/Navbar"
import Input from "../components/input/Input";

function User({ onCreateUserSubmit }: UserProps) {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [postalcode, setPostalcode] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");


  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    onCreateUserSubmit({ firstname,lastname, street, city, state, postalcode, mobile, email });
  } 
  return (
    
    <div className='flex min-h-screen max-h-screen '>
      <div className=' w-1/5'> <Navbar /></div>
     

      <div className=' w-4/5  bg-slate-700 h-screen '>
      
        <div className='m-5 bg-teal-500 rounded-xl p-3 text-white '>
    <form onSubmit={submitHandler}>
      <div className="m-10 pb-14 rounded-lg border-2 border-slate-800  ">
       <h2 className="text-xl font-semibold p-5 bg-slate-900 uppercase rounded-t-lg">Create a new User</h2>
      <div className=" p-10 grid gap-7 grid-cols-3  ">
       
        <Input 
          className=""
          htmlFor={"firstname"}
          label={"First Name"}
          type="text"
          name="firstname"
          id="firstname"
          onChange={e => setFirstname(e.target.value)}
          value={firstname}
        />
        <Input 
          className=""
          htmlFor={"lastnamename"}
          label={"Last Name"}
          type="text"
          name="lastnamename"
          id="lastnamename"
          onChange={e => setLastname(e.target.value)}
          value={lastname }
        />
          
        <Input
          className=""
          htmlFor={"street"}
          label={"Street"}
          type="text"
          name="street"
          id="street"
          onChange={e => setStreet(e.target.value)}
          value={street}
        />
        <Input
          className=""
          htmlFor={"city"}
          label={"City"}
          type="text"
          name="city"
          id="city"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <Input
          className=""
          htmlFor={"state"}
          label={"State"}
          type="text"
          name="state"
          id="state"
          onChange={e => setState(e.target.value)}
          value={state}
        />
         <Input
          className=""
          htmlFor={"postalcode"}
          label={"Postalcode"}
          type="text"
          name="postalcode"
          id="postalcode"
          onChange={e => setPostalcode(e.target.value)}
          value={postalcode}
        />
        <Input
          className=""
          htmlFor={"mobile"}
          label={"Mobile"}
          type="text"
          name="mobile"
          id="mobile"
          onChange={e => setMobile(e.target.value)}
          value={mobile}
        />
        <Input
          className=""
          htmlFor={"email"}
          label={"Email"}
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
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
export default User;