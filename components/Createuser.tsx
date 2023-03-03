/**
 * CreateProject is a component for creating a new component
 * */
import React from 'react';
import { UserProps } from "./UserProps";
import Input1 from "./input1/Input1";
// import Textarea from "../app/textarea/Textarea";
import { Button } from "./button/Button";
// import "../components/usermodule/User.css";
import Navbar from "./Navbar"

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
    
    <form onSubmit={submitHandler}>
      <div className="mx-10   p-10    bg-teal-500  h-screen">
       <h2 className="text-xl font-semibold ">Create a new User</h2>
      <div className="mt-5 grid gap-3 mb-3 md:grid-cols-2">
       
        <Input1 
          containerClassName=""
          htmlFor={"firstname"}
          label={"First Name"}
          type="text"
          name="firstname"
          id="firstname"
          onChange={e => setFirstname(e.target.value)}
          value={firstname}
        />
        <Input1 
          containerClassName=""
          htmlFor={"lastnamename"}
          label={"Last Name"}
          type="text"
          name="lastnamename"
          id="lastnamename"
          onChange={e => setLastname(e.target.value)}
          value={lastname }
        />
          
        <Input1
          containerClassName=""
          htmlFor={"street"}
          label={"Street"}
          type="string"
          name="street"
          id="street"
          onChange={e => setStreet(e.target.value)}
          value={street}
        />
        <Input1
          containerClassName=""
          htmlFor={"city"}
          label={"City"}
          type="string"
          name="city"
          id="city"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <Input1
          containerClassName=""
          htmlFor={"state"}
          label={"State"}
          type="string"
          name="state"
          id="state"
          onChange={e => setState(e.target.value)}
          value={state}
        />
         <Input1
          containerClassName=""
          htmlFor={"postalcode"}
          label={"Postalcode"}
          type="string"
          name="postalcode"
          id="postalcode"
          onChange={e => setPostalcode(e.target.value)}
          value={postalcode}
        />
        <Input1
          containerClassName=""
          htmlFor={"mobile"}
          label={"Mobile"}
          type="string"
          name="mobile"
          id="mobile"
          onChange={e => setMobile(e.target.value)}
          value={mobile}
        />
        <Input1
          containerClassName=""
          htmlFor={"email"}
          label={"Email"}
          type="string"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        </div>
        <Button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right"
          label={"Create"} 
          />
      </div>
    </form>
  );
}
export default User;