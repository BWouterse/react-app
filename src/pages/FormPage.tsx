import React from "react";
import Form from "../components/Form";

const FormPage = () => {
  return (
    <div>
      <Form
        labelOne="hi there"
        labelTwo="hi!"
        typeOne="text"
        placeholderOne="I am a placeholder"
      ></Form>
    </div>
  );
};

export default FormPage;
