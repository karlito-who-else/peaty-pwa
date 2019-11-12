import { Field, Form, Formik } from "formik";
import { Select, Switch, TextField } from "formik-material-ui";
import PropTypes from "prop-types";
import React, { ReactElement } from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  LinearProgress,
  MenuItem
} from "@material-ui/core";

import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";

interface Values {
  email: string;
}

const ranges = [
  {
    value: "none",
    label: "None"
  },
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];

const CustomQueryStringComponent = ({ location }): ReactElement => {
  return (
    <Layout pathname={location.pathname}>
      <main>
        <h1>Organization Settings</h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
            select: "none",
            tags: [],
            rememberMe: true
          }}
          validate={values => {
            const errors: Partial<Values> = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          render={({ submitForm, isSubmitting, values, setFieldValue }) => (
            <Form>
              <Field
                component={TextField}
                // component={UppercasingTextField}
                label="Email"
                margin="normal"
                name="email"
                placeholder="Please enter your email address"
                type="email"
              />
              <br />
              <Field
                component={TextField}
                label="Password"
                margin="normal"
                name="password"
                placeholder="Please enter your password"
                type="password"
              />
              <br />
              <FormControlLabel
                control={
                  <Field
                    component={Switch}
                    label="Remember Me"
                    name="rememberMe"
                  />
                }
                label="Remember Me"
                margin="normal"
              />
              <br />
              <Field
                component={TextField}
                helperText="Please select Range"
                // InputLabelProps={{
                //   shrink: true
                // }}
                label="With Select"
                margin="normal"
                name="select"
                select
                type="text"
                variant="standard"
              >
                {ranges.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              <br />
              <FormControl margin="normal">
                <InputLabel shrink={true} htmlFor="tags">
                  Tags
                </InputLabel>
                <Field
                  component={Select}
                  inputProps={{ name: "tags", id: "tags" }}
                  multiple={true}
                  name="tags"
                  type="text"
                >
                  <MenuItem value="dogs">Dogs</MenuItem>
                  <MenuItem value="cats">Cats</MenuItem>
                  <MenuItem value="rats">Rats</MenuItem>
                  <MenuItem value="snakes">Snakes</MenuItem>
                </Field>
              </FormControl>
              <br />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                color="primary"
                disabled={isSubmitting}
                margin="normal"
                onClick={submitForm}
                variant="contained"
              >
                Submit
              </Button>
            </Form>
          )}
        />
      </main>
    </Layout>
  );
};

CustomQueryStringComponent.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
