import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Dropdown, Label } from "semantic-ui-react";
import TextInput from "./TextInput";
import * as Yup from "yup";
import "./Form.css";

const validationSchema = Yup.object().shape({
  table: Yup.number().required("Required"),
  dishes: Yup.string().required("Required")
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
  const [dropValue, setDropValue] = useState("");
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
      {({ values }) => (
        <FormikForm className="form">
          <TextInput label="Table" name="table" type="number" />
          <TextInput label="Quantity" name="quantity" type="number" />
          <Dropdown
            label="Dish"
            value={dropValue}
            placeholder="Select Dish"
            options={dishOptions}
            onChange={(e, { value }) => {
              values.quantity &&
                values.dishes.push(values.quantity + " x " + value);
              setDropValue(value);
              console.log(values);
            }}
            search
            selection
            fluid
          />
          {values.dishes &&
            values.dishes.map((dish, index) => (
              <Label className="dish" key={index}>
                {dish}
              </Label>
            ))}
          <div>
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
