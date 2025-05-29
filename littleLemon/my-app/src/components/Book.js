import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Book() {
  return (
    <div className="book-container">
      <h1 className="book-title">Book Your Table </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          date: "",
          time: "",
          numberOfGuests: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(25, "name must be 25 characters or less")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phoneNumber: Yup.string()
            .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
            .required("Phone number is required"),
          date: Yup.date().required("Date is required").nullable(),
          time: Yup.string().required("Time is required"),
          numberOfGuests: Yup.number()
            .min(1, "At least one guest is required")
            .max(10, "Maximum 20 guests allowed")
            .required("Number of guests is required"),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form className="book-form:">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="book-input" />
            <ErrorMessage name="name" component="div" className="error" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="book-input" />
            <ErrorMessage name="email" component="div" className="error" />
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" type="text" className="book-input" />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error"
            />
            <label htmlFor="date">Date </label>
            <Field name="date" type="date" className="book-input" />
            <ErrorMessage name="date" component="div" className="error" />
            <label htmlFor="time">Time</label>
            <Field name="time" type="time" className="book-input" />
            <ErrorMessage name="time" component="div" className="error" />
            <label htmlFor="numberOfGuests">number of guests</label>
            <Field
              name="numberOfGuests"
              type="number"
              min={1}
              max={10}
              classNumber="book-input"
            />
            <ErrorMessage
              name="numberOfGuests"
              component="div"
              className="error"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
