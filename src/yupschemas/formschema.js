import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup.string().min(3).required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Pls enter a valid email").required("Required"),
  phone: yup.number().positive().min(7).integer().required("Required"),
  message: yup.string(),
});
/* 
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

  password: yup.string().min(5).matches(passwordRules, {message: Pls enter a strong password}).required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref('password'),null], "Password must Match").required("Required")
*/
