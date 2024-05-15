import React, { ReactNode } from "react";

interface AlertProps {
  //children: string; here we are saying if we want to use the component with a child like: <Alert>hi</Alert> it needs to be a string but as you can imagine we also want to pass html maybe
  children: ReactNode; //using reactNode makes it so you can use html in a child like <Alert>hi<span>world</span></Alert>
  onClose?: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
