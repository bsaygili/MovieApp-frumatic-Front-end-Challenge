import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
});

export const loginFormInitialValues = {
  email: "",
  password: "",
};
