import React from "react";

export interface InputProps {
  className?: string;
  htmlFor: string;
  label: string;
  type: string;
  name?: string;
  id?: string;
placeholder?:string;
  onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void
  value: string;
}