import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Header from "./Header";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";

const PizzaHeader = styled(Header)`
  margin: 2% auto;
`;

const FormDiv = styled.div`
  margin: 0 2%;
`;

const Form = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [post, setPost] = useState([]);
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: false,
    sausage: false,
    onion: false,
    greenpepper: false,
  });
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    onion: false,
    greenpepper: false,
    sauce: "",
    instructions: "",
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setIsDisabled(!valid);
    });
    console.log(formState);
  }, [formState]);

  const sauces = [
    {
      name: "Original Red",
      id: "original",
    },
    { name: "Alfredo", id: "alfredo" },
    {
      name: "Garlic Ranch",
      id: "garlic",
    },
    {
      name: "BBQ Sauce",
      id: "bbq",
    },
  ];

  const toppings = [
    {
      name: "Pepperoni",
      id: "pepperoni",
    },
    {
      name: "Sausage",
      id: "sausage",
    },
    {
      name: "Onion",
      id: "onion",
    },
    {
      name: "Green Pepper",
      id: "greenpepper",
    },
  ];

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        setFormState({
          name: "",
          size: "",
          pepperoni: false,
          sausage: false,
          onion: false,
          greenpepper: false,
          sauce: "",
          instructions: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const inputChange = (e) => {
    console.log("input changed!", e.target.checked);
    e.persist();
    const formData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(formData);
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be more than one character")
      .required("Name is a required field"),
    size: yup.string().required("Please select a size"),
    sauce: yup.string().required("Please select a sauce"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    greenpepper: yup.boolean(),
    instructions: yup.string()
  });

  return (
    <FormDiv>
      <PizzaHeader>Build Your Own Pizza</PizzaHeader>
      <form onSubmit={formSubmit}>
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
              data-cy="name"
            />
            {errors.name.length > 2 ? <p>{errors.name}</p> : null}
          </label>
        </div>
        <div>
          <h2>Choice of Size</h2>
          <p>Required</p>
        </div>
        <select
          id="size"
          name="size"
          onChange={inputChange}
          value={formState.size}
          data-cy="size"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
        {errors.size.length > 0 ? <p>{errors.size}</p> : null}
        <div>
          <h2>Choice of Sauce</h2>
          <p>Required</p>
        </div>
        <div>
          {sauces.map((sauce, i) => {
            return (
              <CheckBox
                key={i}
                type="radio"
                name="sauce"
                checked={formState.sauce === sauce.name}
                value={sauce.name}
                htmlFor={sauce.name}
                onChange={inputChange}
                data-cy={sauce.id}
              />
            );
          })}
        </div>
        {errors.sauce.length > 0 ? <p>{errors.sauce}</p> : null}
        <div>
          <h2>Add Toppings</h2>
          <p>Choose any you would like</p>
        </div>
        <div>
          {toppings.map((topping, i) => {
            return (
              <CheckBox
                key={i}
                id={topping.id}
                type="checkbox"
                name={topping.id}
                htmlFor={topping.name}
                value={topping.name}
                onChange={inputChange}
                data-cy={topping.id}
              />
            );
          })}
        </div>
        <div>
          <h2>Special Instructions</h2>
        </div>
        <div>
          <textarea
            type="text"
            id="instructions"
            name="instructions"
            onChange={inputChange}
            data-cy="textarea"
          ></textarea>
        </div>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <Button disabled={isDisabled}>Submit</Button>
      </form>
    </FormDiv>
  );
};

export default Form;
