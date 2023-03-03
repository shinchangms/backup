import { Input1Props } from "./Input1Props";
// import "./Input1.css";
// import "../../styles/Input1.css";
// import "../../styles/CreateProduct.module.css";
const Input1 = (props: Input1Props) => {
  return (
    // <label className="custom-field two">
    //   <input  type={props.type} placeholder="&nbsp;" onChange={props.onChange} />
    //   <span className={"placeholder"}>{props.label}</span>
    //   <span className="border"></span>
    // </label>
  
  <label className="block mb-4 text-base dark:text-white ">
      <span className={"placeholder "}>{props.label}</span>
      <input className= "bg-gray-50  border border-gray-300 rounded-lg  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  
      type={props.type} placeholder={props.label} onChange={props.onChange}/>    
  </label>
  
    );
};

export default Input1;