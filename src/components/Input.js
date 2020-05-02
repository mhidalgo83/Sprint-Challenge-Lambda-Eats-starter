import React from "react";

const Input = (props) => {
  return <input type="text" id="name" name={props.name} value={props.value} onChange={props.onChange}></input>;
};

export default Input;
