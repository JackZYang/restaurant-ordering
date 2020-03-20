import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Dropdown, Label, Input } from "semantic-ui-react";
import * as Yup from "yup";
import "./Form.css";

const validationSchema = Yup.object().shape({
  table: Yup.number().required("Required")
});

const dishOptions = [
  {
    key: "Fish and Chips",
    text: "Fish and Chips",
    value: "Fish and Chips"
  },
  {
    key: "Potato Cakes",
    text: "Potato Cakes",
    value: "Potato Cakes"
  }
];

const MemberForm = ({ formData, setFormData }) => {
  const [dishName, setDishName] = useState(" ");
  const [quantity, setQuantity] = useState(" ");

  return (
    <Formik
      initialValues={{ table: "", dishes: [] }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setFormData([...formData, values]);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <FormikForm className="form">
          <div className="dish-form">
            <Input
              className="input"
              name="quantity"
              placeholder="Quantity"
              value={quantity}
              type="number"
              onChange={(_, { value }) => setQuantity(value)}
            />
            <Dropdown
              label="Dish"
              placeholder="Select Dish"
              defaultValue={dishName}
              options={dishOptions}
              onChange={(e, { value }) => {
                setDishName(value);
              }}
              search
              selection
              fluid
            />
            <Button
              type="button"
              color="orange"
              onClick={() => {
                quantity && values.dishes.push(quantity + " x " + dishName);
                setDishName("");
                setQuantity("");
              }}
            >
              Add Dish
            </Button>
          </div>
          <div className="table-form">
            <Input
              label="Table"
              name="table"
              type="number"
              value={values.table}
              onChange={handleChange}
            />
            <div className="dish-container">
              {values.dishes &&
                values.dishes.map((dish, index) => (
                  <Label className="dish" key={index}>
                    {dish}
                  </Label>
                ))}
            </div>
            <Button type="submit" color="purple">
              Add
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default MemberForm;
