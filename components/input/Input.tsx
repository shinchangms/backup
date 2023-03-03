import { InputProps } from "./InputProps";
// import "../../styles/globals.css"
// import "./Input.module.css";

const Input = (props: InputProps) => {
  return (
    // <label className="custom-field three">
    //   <input  type={props.type} placeholder="&nbsp;" onChange={props.onChange} />
    //   <span className={"placeholder"}>{props.label}</span>
    //   <span className="border"></span>
    // </label>
/* <label className="block mb-4 text-base text-gray-900 dark:text-white">
      <span className={"placeholder"}>{props.label}</span>
      <input className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 w-80 h-9 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      type={props.type} placeholder="&nbsp;" onChange={props.onChange} />
    </label> */
    <label className="  font-medium flex flex-col ">
      <span className="text-white pb-2">{props.label}</span>
      <input className=" text-black rounded-md bg-transparent"
       type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
      
      {/* <span className="border"></span> */}
    </label>


  );
};

export default Input;