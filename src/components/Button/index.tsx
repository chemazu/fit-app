import React from "react";

type Props = { title: any; className?: string, onClick?: any };

export default function Button({ title, className,onClick }: Props) {
  return <button className={className} onClick={onClick}>{title}</button>;
}