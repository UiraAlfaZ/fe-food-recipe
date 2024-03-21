import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [token, setToken] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeTerms: false,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setToken("token");
      localStorage.setItem("token", Date.now());
      navigate("/home");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const isFormValid = () => {
    const { email, password, agreeTerms } = formData;
    return email.trim() !== "" && password.trim() !== "" && agreeTerms;
  };

  return (
    <>
      <main id="login">
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
              <div className="col-6">
                <img src={logo} alt="logo" style={{ marginTop: "480px", zIndex: "1", marginLeft: "389px" }} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="" style={{ marginTop: "350px", marginLeft: "230px" }}>
              <h2 style={{ color: "#EFC81A", textAlign: "center" }}>Welcome</h2>
              <h5 className="mt-3" style={{ color: "#8692A6", textAlign: "center" }}>
                Log in into your existing account
              </h5>
              <div className="mt-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      size="lg"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      size="lg"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }}
                    />
                  </Form.Group>
                  <div key={`default-checkbox`} className="mb-4 mt-4">
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`I agree to terms & conditions`}
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      name="agreeTerms"
                    />
                  </div>

                  <div className="mb-2">
                    <Button type="submit" variant="warning" size="lg" style={{ width: "426px" }} disabled={!isFormValid()}>
                      Log in
                    </Button>

                    <Link to={"/auth/Forgot"}>
                      <p className="mt-2 text-secondary" style={{ textAlign: "right" }}>
                        Forgot Password
                      </p>
                    </Link>
                    <p className="mt-2" style={{ textAlign: "center" }}>
                      Don't have an account?
                      <Link to={"/auth/Register"}>
                        <a style={{ color: "#EFC81A" }}>Sign up</a>
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
