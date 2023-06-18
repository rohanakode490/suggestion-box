import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SuggestionForm.css";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SuggestionForm = () => {

  // let navigate = useNavigate();
  // const routeChange = () =>{ 
  //   let path = `/`; 
  //   navigate(path);
  // }

  // Validation
  const initialValues = {
    description: "",
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().min(3).max(3000).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="form">
      <div className="title">Suggestion</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="main-box">
          <Field
            className="textarea"
            autoComplete="off"
            id="inputSuggestion"
            name="description"
            placeholder="Got any suggestion?..."
            as="textarea"
          />
          <ErrorMessage className="error" name="description" component="span" />
          {/* <input
          type="text"
          name="suggestion"
          placeholder="Got any suggestion?..."
          /> */}
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SuggestionForm;
