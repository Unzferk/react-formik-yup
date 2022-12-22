import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import "./App.css";
import { formSchema } from "./yupschemas/formschema";

/* on submit can have values and actions as parameters*/
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("submitted");
};

function App() {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: 0,
        message: "",
      },
      validationSchema: formSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        React - Formik - Yup - MUI
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="firstName"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="error">{errors.firstName}</p>
                  )}
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="lastName"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                  />
                  {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="phone"
                  />
                  {errors.phone && touched.phone && (
                    <p className="error">{errors.phone}</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="message"
                  />
                  {errors.message && touched.message && (
                    <p className="error">{errors.message}</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
