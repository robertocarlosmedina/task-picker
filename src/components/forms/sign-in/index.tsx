import React from "react";
import { Formik } from "formik";

import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { signInValidationSchema } from "@/validation-schemas";
import CustomLink from "@/components/custom-link";

function SignIn() {
  return (
    <div>
      <Formik
        validateOnBlur={false}
        validationSchema={signInValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {}}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="text"
              placeholder="example@gmail.com"
              value={values.email}
              touched={touched.email}
              handleChange={handleChange}
              validationErrors={errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="*********"
              value={values.password}
              touched={touched.password}
              handleChange={handleChange}
              validationErrors={errors.password}
              linkComponent={
                <CustomLink
                  label="Forgot Password?"
                  href="/"
                  styles="text-sm"
                />
              }
            />
            <SubmitButton
              label="Sign In"
              styles="w-full bg-primary-forestGreen hover:bg-primary-darkGreen"
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
