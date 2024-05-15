import React from "react";

interface NavBarProps {
  textOne: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
  textFive?: string;
}

const NavBar = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
}: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{textOne}</a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page">
              {textTwo}
            </a>
            <a className="nav-link">{textThree}</a>
            <a className="nav-link">{textFour}</a>
            <a className="nav-link disabled" aria-disabled="true">
              {textFive}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
