import React from "react";

const Dropdown = (props) => {
  return (
    <label>
      <select>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extra large">Extra Large</option>
      </select>
    </label>
  );
};

export default Dropdown;
