import React, { useEffect, useState } from "react";
import bg2 from "../../assets/img/BG2.png";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavbarLogin from "../../components/NavbarLogin";
import PopularRecipe from "../../components/PopularRecipe";
import Discover from "../../components/Discover";
import PopularForYou from "../../components/PopularForYou";
import NewRecipe from "../../components/NewRecipe";
import "../../assets/css/style.css";
import NavbarProfile from "../../components/NavbarProfile";

const Home = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <div>
      {token ? <NavbarProfile /> : <NavbarLogin />}
      <Discover />
      <img src={bg2} alt="background2" style={{ position: "absolute", marginTop: "850px" }} />
      <div className="row" style={{ marginTop: "1040px", position: "absolute", zIndex: "0" }}>
        <div className="col">
          <div className="mt-3" style={{ zIndex: "1", position: "absolute", marginLeft: "135px" }}>
            <PopularForYou />
            <NewRecipe />
            <PopularRecipe />
          </div>
          <div className="mb-4" style={{ marginTop: "4248px" }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
