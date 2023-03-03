import React from "react";

export interface Input1Props {
  containerClassName: string;
  htmlFor: string;
  label: string;
  type: string;
  name?: string;
  id?: string;
  // placeholder:string;
  onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void
  value: string;
}