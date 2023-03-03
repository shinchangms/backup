import React from 'react'
import { TextareaProps } from "./TextareaProps";
// import "./Textarea.css";
const Textarea = (props: TextareaProps) => {
  return (
    // <label className="custom-field three">
    // <textarea rows={props.rows} cols={props.cols} onChange={props.onChange}>
    // {/* <span className={"placeholder"}>{props.label}</span> */}
    // </textarea>
    // </label>

    <label className=" mb-2 mt-9  font-medium flex flex-col"> Description
   <textarea className= "text-black rounded-lg bg-transparent"
    rows={props.rows} cols={props.cols} onChange={props.onChange}>
   </textarea>
   </label>
    )

}
export default Textarea;