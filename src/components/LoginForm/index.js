import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Formik, Form } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "./constant";
import { Button, TextFieldWrapper } from "./styled";
import { loginRequest } from "../../store/actions";
import { BsEyeSlashFill } from "react-icons/bs";

import TextField from "../TextField";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(loginRequest(values));
  };
  return (
    <Formik
      initialValues={loginFormInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <div>
          <h1 className="mt-5 font-weight-bold ">Log in to your account</h1>
          <Form>
            <TextField
              placeholder="Your email adress"
              name="email"
              type="email"
              style={{ height: "50px" }}
            />
            <TextFieldWrapper>
              <TextField
                placeholder="Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                style={{ height: "50px" }}
              />
              <BsEyeSlashFill
                className="eyeicon"
                onClick={() => setPasswordShown(!passwordShown)}
              />
            </TextFieldWrapper>
            <div className="text-center">
              <Button className="btn-block btn-lg mt-5" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default LoginForm;
