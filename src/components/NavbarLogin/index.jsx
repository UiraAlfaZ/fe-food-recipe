import React from "react";
import profilephoto from "../../assets/img/Usericon.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  return (
    <>
      <Navbar className="fixed-top">
        <Nav className="me-auto mt-4" style={{ marginLeft: "100px" }}>
          <Nav.Link href="" className="" style={{ color: "#2E266F", fontSize: "18px" }}>
            <Link to={"/home"}>Home</Link>
          </Nav.Link>
          <Nav.Link href="" className="ml-5" style={{ color: "#2E266F", fontSize: "18px" }}>
            <Link to={"/addRecipe"}>Add Recipe</Link>
          </Nav.Link>
          <Nav.Link href="" className="ml-5" style={{ color: "#2E266F", fontSize: "18px" }}>
            <Link to={"/profile"}>Profile</Link>
          </Nav.Link>
          <Nav.Link href="" style={{ marginLeft: "1150px" }}>
            <img src={profilephoto} alt="profile" />
          </Nav.Link>

          <Nav.Link href="" className="ml-1 mt-2" style={{ color: "#FFFFFF", fontSize: "18px" }}>
            <Link to={"/auth/Login"}>Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
