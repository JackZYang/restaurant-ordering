import React from "react";
import { useField } from "formik";
import { Form } from "semantic-ui-react";
import "./TextInput.css";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-error">
      <Form.Input
        label={label}
        className="text-input"
        placeholder={label}
        {...field}
        {...props}
        fluid
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
