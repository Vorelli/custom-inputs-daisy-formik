import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput.js";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const onSubmit = (values, actions) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

const initialValues = {
  email: "",
  name: "",
};

function App() {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput label="Name" name="name" type="text" />
            <CustomInput label="Email" name="email" type="email" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default App;
