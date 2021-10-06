import React from "react";
import { Field, FieldProps } from "formik";
import classNames from "classnames";

import classes from "./TagField.module.scss";

interface TagFieldProps<T> {
  name: string;
  label: string;
  options: Partial<T>[];
  displayKey: keyof T;
}

const TagField = <T extends { id: string | number }>({
  name,
  label,
  options,
  displayKey,
}: TagFieldProps<T>) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} className="form-control">
        {({ form, field }: FieldProps<T[]>) => {
          return (
            <div>
              {options.map((option) => {
                const isSelected = field.value.find(
                  (item) => item.id === option.id
                );
                const handleClick = () =>
                  form.setFieldValue(
                    name,
                    isSelected
                      ? field.value.filter((item) => item.id !== option.id)
                      : [...field.value, { id: option.id }]
                  );

                return (
                  <span
                    key={option.id}
                    onClick={handleClick}
                    className={classNames(
                      classes.Tag,
                      "badge mr-3 mb-1 p-2",
                      isSelected ? "badge-success" : "badge-light"
                    )}
                  >
                    {option[displayKey]}
                  </span>
                );
              })}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default TagField;
