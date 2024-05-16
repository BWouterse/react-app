import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  textOne: string;
  linkOne: string;
  textTwo?: string;
  linkTwo?: string;
  textThree?: string;
  textFour?: string;
  textFive?: string;
}

const NavBar = ({
  textOne,
  linkOne,
  textTwo,
  linkTwo,
  textThree,
  textFour,
  textFive,
}: NavBarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => navigate(linkOne)}>
          {textOne}
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {textTwo && linkTwo && (
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => navigate(linkTwo)}
              >
                {textTwo}
              </a>
            )}

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
