import React from "react";
import { Field } from "formik";

interface TextFieldProps {
  name: string;
  label: string;
}

const TextField = ({ name, label }: TextFieldProps) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} type="text" className="form-control" />
    </div>
  );
};

export default TextField;
