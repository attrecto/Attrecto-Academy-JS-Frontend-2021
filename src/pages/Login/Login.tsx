import React, { FC } from "react";
import { Formik, Form } from "formik";
import { CredentialsModel } from "../../models/credentials";
import * as Yup from "yup";
import TextField from "../../components/text-field/TextField";
import { authService } from "../../service/auth.service";
import Button from "../../components/button/Button";

interface LoginProps {
  setToken: (token: string | null) => void;
}

const Login: FC<LoginProps> = ({ setToken }) => {
  const handleSubmit = async (values: CredentialsModel) => {
    try {
      const { token } = await authService.login(values);
      setToken(token);
    } catch (e) {
      setToken(null);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card shadow mt-3">
            <div className="card-body">
              <h5 className="cart-title text-center">Sign in</h5>
              <Formik
                initialValues={{ email: "", password: "" } as CredentialsModel}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required(),
                  password: Yup.string().required(),
                })}
                onSubmit={handleSubmit}
              >
                <Form>
                  <TextField name="email" label="Email" />
                  <TextField name="password" label="Password" type="password" />

                  <Button type="submit">Sign in</Button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
