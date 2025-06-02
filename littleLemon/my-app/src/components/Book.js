import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyTextField from "./MyTextField";
import { TextField, Button, Grid, Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MyError from "./MyError";
import ReserveNowButton from "./ReserveNowButton";
import Stack from "@mui/material/Stack";
export default function Book() {
  return (
    <div className="book-container">
      <h1 className="book-title">Book Your Table </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          date: null,
          time: null,
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
          date: Yup.date().nullable().required("Date is required"),
          time: Yup.string().required("Time is required"),
          numberOfGuests: Yup.number()
            .min(1, "At least one guest is required")
            .max(10, "Maximum 20 guests allowed")
            .required("Number of guests is required"),
        })}
        onSubmit={(values) => alert("Booking details submitted successfully!")}
      >
        {({ values, setFieldValue }) => (
          <Form className="book-form">
            <div className="book-inputAndError">
              <Field name="name" as={MyTextField} label="Name: " />
              <ErrorMessage name="name" component={MyError} />
            </div>

            <div className="book-inputAndError">
              <Field
                name="email"
                as={MyTextField}
                type="email"
                label="Email Address: "
              />
              <ErrorMessage name="email" component={MyError} />
            </div>

            <div className="book-inputAndError">
              <Field
                name="phoneNumber"
                type="text"
                as={MyTextField}
                label="Phone Number: "
              />
              <ErrorMessage name="phoneNumber" component={MyError} />
            </div>

            <div className="book-inputAndError">
              <Field name="date">
                {({ field, form }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={field.value}
                        onChange={(newValue) => {
                          form.setFieldValue("date", newValue);
                        }}
                        slotProps={{
                          textField: {
                            label: "Date:",
                            variant: "filled",
                            color: "black",
                          },
                        }}
                        sx={{
                          width: "50%",
                          backgroundColor: "#fff",
                          borderRadius: "5px",
                          "& .MuiFilledInput-root:hover, & .MuiFilledInput-root.Mui-focused":
                            {
                              backgroundColor: "#F4CE14",
                            },
                          "& .MuiFilledInput-input": {
                            color: "#000",
                          },
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                )}
              </Field>
              <ErrorMessage name="date" component={MyError} />
            </div>
            <div className="book-inputAndError">
              <Field name="time">
                {({ field, form }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeClock
                      value={field.value}
                      onChange={(newValue) => {
                        form.setFieldValue("time", newValue);
                      }}
                    />
                  </LocalizationProvider>
                )}
              </Field>
            </div>
            <ErrorMessage name="time" component={MyError} />

            <div className="book-inputAndError">
              <Field
                name="numberOfGuests"
                type="number"
                label="Number of Guests: "
                min={1}
                max={10}
                as={MyTextField}
                sx={{ width: "10%" }}
              />
              <ErrorMessage name="numberOfGuests" component={MyError} />
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#ffffff",
                width: "30%",
                color: "#000",
                fontSize: "20px",
                "&:hover": {
                  backgroundColor: "#F4CE14",
                  color: "#000",
                },
              }}
            >
              Book Now
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
