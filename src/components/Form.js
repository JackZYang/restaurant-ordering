import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Dropdown } from "semantic-ui-react";
import TextInput from "./TextInput";
import * as Yup from "yup";
import "./Form.css";

const validationSchema = Yup.object().shape({
  table: Yup.number().required("Required"),
  quantity: Yup.number().required("Required"),
  dish: Yup.string().required("Required")
});

const MemberForm = ({ formData, setFormData }) => {
  return (
    <Formik
      initialValues={{ table: "", quantity: "", dish: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setFormData([...formData, values]);
        setSubmitting(false);
        resetForm();
      }}
    >
      <FormikForm className="form">
        <TextInput label="Table" name="table" type="number" />
        <TextInput label="Quantity" name="quantity" type="number" />
        <TextInput label="Dish" name="dish" type="text" />
        <Button type="submit" color="purple">
          Add
        </Button>
      </FormikForm>
    </Formik>
  );
};

export default MemberForm;
