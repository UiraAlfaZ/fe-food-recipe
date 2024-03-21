import React from "react";
import bg1 from "../../assets/img/BG.png";
import sayur from "../../assets/img/makanan2.png";
import makanan from "../../assets/img/makanan1.png";
import search from "../../assets/img/searchbutton.png";

const Discover = () => {
  return (
    <>
      <div className="row">
        <div className="col" style={{ zIndex: "1", position: "absolute" }}>
          <div className="row" style={{ marginTop: "426px", marginLeft: "132px", zIndex: "1", position: "absolute" }}>
            <div className="col-7">
              <h2 className="mb-3" style={{ color: "#2E266F", fontSize: "72px", fontWeight: "700" }}>
                Discover Recipe & Delicious Food
              </h2>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary" type="button">
                    <img src={search} alt="searchbtn" />
                  </button>
                </div>
                <input type="text" className="form-control" placeholder="Search Recipe" aria-label="" style={{ width: "400px", height: "90" }} />
              </div>
            </div>
          </div>

          <img src={bg1} alt="background1" className="background-image" style={{ position: "absolute", zIndex: "0", width: "1920px", height: "1210px" }} />
          <img src={sayur} alt="backgroundsayur" className="background-image" style={{ position: "absolute", marginLeft: "1139px" }} />
          <img src={makanan} alt="backgroundmakanan" className="background-image" style={{ position: "absolute", marginLeft: "927px", marginTop: "250px" }} />
        </div>
      </div>
    </>
  );
};

export default Discover;
