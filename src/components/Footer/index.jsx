import React from "react";

const Footer = () => {
  return (
    <>
      <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "1920px", height: "685px", position: "absolute" }}>
        <div style={{ marginTop: "247px", textAlign: "center" }}>
          <h3 style={{ fontWeight: "400", fontSize: "72px", textAlign: "center" }}>Eat,Cook,Repeat</h3>
          <h4 className="mt-4" style={{ fontSize: "24px", color: "#707070" }}>
            Share Your Best Recipe By Uploading Here !
          </h4>
        </div>
        <div style={{ marginTop: "217px", marginLeft: "560px" }}>
          <div className="row">
            <div className="col-2">Product</div>
            <div className="col-2">Company</div>
            <div className="col-2">Learn More</div>
            <div className="col-2">Get in Touch</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
