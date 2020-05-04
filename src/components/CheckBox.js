import React from "react";

const CheckBox = (props) => {
  return (
    <label htmlFor={props.name}>
      <input {...props} />
      {props.htmlFor}
    </label>
  );
};

export default CheckBox;
