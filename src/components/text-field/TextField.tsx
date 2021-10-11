import React from "react";
import { Field } from "formik";

interface TextFieldProps {
  name: string;
  label: string;
  type?: string;
}

const TextField = ({ name, label, type }: TextFieldProps) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} type={type} className="form-control" />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

export default TextField;
