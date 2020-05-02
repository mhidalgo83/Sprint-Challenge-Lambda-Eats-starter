import React from "react";

const CheckBox = (props) => {
  return (
    <label htmlFor={props.name}>
      <input
        type={props.type}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
      {props.children}
    </label>
  );
};

export default CheckBox;
