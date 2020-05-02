import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Input from "./Input";
import styled from "styled-components";

const PizzaHeader = styled(Header)`
  margin: 2% auto;
`;

const FormDiv = styled.div`
  margin: 0 2%;
`;

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings: [],
    instructions: "",
  });

  useEffect(() => {}, [formState]);

  const inputChange = (e) => {
    console.log("input changed!", e.target.value);
    e.persist();
    const formData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" || "radio"
          ? e.target.checked
          : e.target.value,
    };
    setFormState(formData);
  };
  return (
    <FormDiv>
      <PizzaHeader>Build Your Own Pizza</PizzaHeader>
      <form>
        <h2>Build Your Own Pizza</h2>
        <div>
          <h2>Who is this for?</h2>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              onChange={inputChange}
              value={formState.name}
            />
          </label>
        </div>
        <div>
          <h2>Choice of Size</h2>
          <p>Required</p>
        </div>
        <Dropdown />
        <div>
          <h2>Choice of Sauce</h2>
          <p>Required</p>
        </div>
        <div>
          <CheckBox type="radio" value="original" onChange={inputChange}>
            Original Red
          </CheckBox>
          <CheckBox type="radio" value="garlic" onChange={inputChange}>
            Garlic Ranch
          </CheckBox>
          <CheckBox type="radio" value="bbq" onChange={inputChange}>
            BBQ Sauce
          </CheckBox>
          <CheckBox type="radio" value="alfredo" onChange={inputChange}>
            Alfredo
          </CheckBox>
        </div>
        <div>
          <h2>Add Toppings</h2>
          <p>Choose up to 10</p>
        </div>
        <div>
          <CheckBox type="checkbox" value="Pepperoni" onChange={inputChange}>
            Pepperoni
          </CheckBox>
          <CheckBox type="checkbox" value="Sausage" onChange={inputChange}>
            Sausage
          </CheckBox>
          <CheckBox
            type="checkbox"
            value="Canadian Bacon"
            onChange={inputChange}
          >
            Canadian Bacon
          </CheckBox>
          <CheckBox
            type="checkbox"
            value="Spice Italian Sausage"
            onChange={inputChange}
          >
            "Spice Italian Sausage"
          </CheckBox>
          <CheckBox
            type="checkbox"
            value="Grilled Chicken"
            onChange={inputChange}
          >
            Grilled Chicken
          </CheckBox>
          <CheckBox type="checkbox" value="Onions" onChange={inputChange}>
            Onions
          </CheckBox>
          <CheckBox type="checkbox" value="Green Pepper" onChange={inputChange}>
            Green Pepper
          </CheckBox>
        </div>
        <div>
          <CheckBox
            type="checkbox"
            value="Diced Tomatoes"
            onChange={inputChange}
          >
            Diced Tomatoes
          </CheckBox>
          <CheckBox type="checkbox" value="Black Olives" onChange={inputChange}>
            Black Olives
          </CheckBox>
          <CheckBox
            type="checkbox"
            value="Roasted Garlic"
            onChange={inputChange}
          >
            Roasted Garlic
          </CheckBox>
          <CheckBox
            type="checkbox"
            value="Artichoke Hearts"
            onChange={inputChange}
          >
            Artichoke Hearts
          </CheckBox>
          <CheckBox type="checkbox" value="Three Cheese" onChange={inputChange}>
            Three Cheese
          </CheckBox>
          <CheckBox type="checkbox" value="Pineapple" onChange={inputChange}>
            Pineapple
          </CheckBox>
          <CheckBox type="checkbox" value="Extra Cheese" onChange={inputChange}>
            Extra Cheese
          </CheckBox>
        </div>
        <div>
          <h2>Choice of Substitute</h2>
          <p>Choose up to 1</p>
        </div>
        <div>
          <CheckBox type="checkbox" value="Gluten Free Crust">
            Gluten Free Crust
          </CheckBox>
        </div>
        <div>
          <h2>Special Instructions</h2>
        </div>
        <div>
          <Input type="text" />
        </div>
        <Button>Submit</Button>
      </form>
    </FormDiv>
  );
};

export default Form;
