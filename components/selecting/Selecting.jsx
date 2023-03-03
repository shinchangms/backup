import React from "react";
import Select from "react-select";
// import "../../app/globals.css";

const options = [
  { value: "Andrew", label: "Andrew" },
  { value: "Caroline", label: "Caroline" },
  { value: "Jasmine", label: "Jasmine" },
];

const Selecting = () => (
  <Select
    className=" w-60 "
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: state.isFocused ? "black" : "gray",
        outline: "none",
        backgroundColor: "transparent",
      }),
      option: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: "transparent",
        outline: "none",

        backgroundColor: state.isFocused ? "rgb(30, 41, 59)" : "white",
        color: state.isFocused ? "white" : "black",
      }),
    }}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      // colors: {
      //   ...theme.colors,
      //   primary25: "hotpink",
      //   primary: "black",
      // },
    })}
    options={options}
  ></Select>
);

export default Selecting;
