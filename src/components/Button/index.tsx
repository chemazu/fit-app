import React from "react";
import "./style.scss";
type Props = {
  title: any;
  className?: string;
  onClick?: any;
  inactive?: boolean;
};

export default function Button({ title, className, onClick, inactive }: Props) {
  return (
    <button
      className={inactive ? "inactive" : className}
      onClick={inactive ? (e)=>{
        e.preventDefault();
        alert("Please fill all the fields")
      } : onClick}
    >
      {title}
    </button>
  );
}
