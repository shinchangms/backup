import React from "react";

export interface TextareaProps {
  rows: number; 
  cols: number;
  value: string;
  //  label: string;
  onChange: ( e: React.ChangeEvent<HTMLTextAreaElement> ) => void
}