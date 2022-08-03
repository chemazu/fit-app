import React from "react";
import "./style.scss";

type Props = { type?: string; label?: string,control: {value: string, setValue: (value: string) => void}};

export default function Input({ type, label,control }: Props) {
  let {value,setValue}=control
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <input type={type} onChange={(e)=>{setValue(e.target.value)}} value={value}/>
      {/* <p>Validation</p>  */}
      
    </div>
  );
}
