import React from "react";
import logo from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <main id="reset">
        <div className="row">
          <div className="col-6">
            <img src={logobg} alt="logobg" className="background-image" style={{ width: "960px", height: "1805px", position: "absolute", zIndex: "0", backgroundImage: "linear-gradient(#EFC81A, #EFC81A)" }} />
            <div className="row">
              <div className="col-6">
                <img src={logo} alt="logo" style={{ marginTop: "480px", zIndex: "1", marginLeft: "389px" }} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="" style={{ marginTop: "350px", marginLeft: "230px" }}>
              <div className="mt-4">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Create New Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="" style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Password" style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }} />
                  </Form.Group>
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-4 mt-4">
                      <Form.Check type={type} id={`default-${type}`} label={`i agree to terms & conditions`} />
                    </div>
                  ))}
                </Form>
                <div className="mb-2">
                  <Link to={"/home"}>
                    <Button variant="warning" size="lg" style={{ width: "426px" }}>
                      Reset Password
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
