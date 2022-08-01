import React from "react";
import "./style.scss";

export default function Logo({ className }: { className?: string }) {
  return <h1 className={className}>{process.env.REACT_APP_APP_NAME}</h1>;
}
