import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import logobg from "../../../assets/img/bglogin.png";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [termsChecked, setTermsChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value !== "") && termsChecked
    );
  };

  return (
    <div>
      <main id="register">
        <div className="row">
          <div className="col-6">
            <img
              src={logobg}
              alt="logobg"
              className="background-image"
              style={{
                width: "960px",
                height: "1805px",
                position: "absolute",
                zIndex: "0",
                backgroundImage: "linear-gradient(#EFC81A, #EFC81A)",
              }}
            />
            <div className="row">
              <div className="col-12">
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginTop: "480px", zIndex: "1", marginLeft: "389px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="" style={{ marginTop: "529px", marginLeft: "200px" }}>
              <h2 style={{ color: "yellow", textAlign: "center" }}>Let's Get Started !</h2>
              <h5 className="mt-3" style={{ textAlign: "center" }}>
                Create new account to access all features
              </h5>
              <div className="mt-4">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address*</Form.Label>
                    <Form.Control
                      size="lg"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      size="lg"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control
                      size="lg"
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Create New Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      size="lg"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <div key={`default-checkbox`} className="mb-4">
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`I agree to terms & conditions`}
                      checked={termsChecked}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </Form>
                <div className="mb-2">
                  <Link to={"/auth/Confirm"}>
                    <Button
                      variant="warning"
                      size="lg"
                      style={{ width: "426px" }}
                      disabled={!isFormValid()}
                    >
                      Link Register Account
                    </Button>
                  </Link>
                  <p className="mt-2" style={{ textAlign: "center" }}>
                    Already have account?{" "}
                    <Link to={"/auth/Login"}>
                      <a style={{ color: "yellow" }}>Log In Here</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
