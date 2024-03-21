import React from "react";
import logo from "../../../assets/logo.png";
import logobg from "../../../assets/img/bglogin.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <>
      <main id="forgot">
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
            <div className="" style={{ marginTop: "400px", marginLeft: "230px" }}>
              <h2 style={{ color: "#EFC81A", textAlign: "center" }}>Forgot Password?</h2>
              <h5 className="mt-3" style={{ color: "#8692A6", textAlign: "center" }}>
                We just need your registered e-mail address<br></br>
                to send your password resend
              </h5>
              <div className="mt-4">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="name@example.com" style={{ border: "1px solid #EFC81A", width: "426px", height: "64px", paddingLeft: "30px" }} />
                  </Form.Group>
                </Form>
                <div className="mb-2">
                  <Link to={"/auth/Confirm"}>
                    <Button variant="warning" size="lg" style={{ width: "426px" }}>
                      Send E-mail
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

export default Forgot;
