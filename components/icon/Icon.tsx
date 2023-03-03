import React from "react";
import { IconProps } from "./IconProps";
// import "./Icon.css";
import { getIcon } from "./IconSelector";

const Icon = (props: IconProps) => {
  const [icon, setIcon] = React.useState(getIcon(props.iconName));
  React.useEffect(() => {
    setIcon(getIcon(props.iconName));
  }, [props.iconName]);
  return (
    <svg className="Icon"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      style={props.style}
      viewBox={props.viewBox}
    >
      {icon}
    </svg>

  );
};

export default Icon;