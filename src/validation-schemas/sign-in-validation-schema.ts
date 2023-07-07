import * as yup from "yup";

export const signInValidationSchema = yup.object().shape({
  email: yup.string().email("Email must be a valid email address").required("Email is a required field"),
  password: yup.string().required("Password is a required field")
});
