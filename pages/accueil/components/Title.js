import React from "react";

export default function Title({ children }) {
  const style = {
    fontFamily: "Parisienne",
    fontSize: "8vw",
    margin: "0",
    color: "black",
    textShadow: "1px 1px 3px rgb(0 0 0 / 30%)",
  };

  return <h1 style={style}> {children} </h1>;
}
