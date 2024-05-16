import React from "react";

interface FormProps {
  labelOne: string;
  typeOne: "email" | "password" | "date" | "url";
  placeholderOne: string;
  labelTwo: string;
}

const Form = ({ labelOne, labelTwo, typeOne, placeholderOne }: FormProps) => {
  return (
    <>
      {" "}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          {labelOne}
        </label>
        <input
          type={typeOne}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={placeholderOne}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {labelTwo}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
      </div>
    </>
  );
};

export default Form;
