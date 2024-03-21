import React, { useEffect, useState } from "react";
import NavbarLogin from "../../components/NavbarLogin";
import recipe from "../../assets/img/recipe12.png";
import { Button, Form } from "react-bootstrap";
import play from "../../assets/img/play.png";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import miniprofile from "../../assets/img/miniprofile.png";
import NavbarProfile from "../../components/NavbarProfile";

const DetailRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://food-recipe-api-production.up.railway.app/api/v1/recipe/${id}`)
      .then((res) => {
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavbarProfile />
      {/* DetailRecipe {id} */}
      {/* {JSON.stringify(recipes)} */}
      <main id="detail">
        <div style={{ marginTop: "156px", justifyContent: "center" }}>
          <h1 style={{ fontWeight: "500", fontSize: "72px", color: "#2E266F", marginLeft: "660px" }}>{recipes.Title}</h1>
          <img src={recipe} alt="gambar" style={{ marginLeft: "400px", marginTop: "70px" }} />
          <div style={{ marginTop: "109px" }}>
            <h4 style={{ fontWeight: "500", fontSize: "48px", marginLeft: "312px" }}>Ingredients</h4>
            <div style={{ marginTop: "42px", marginLeft: "306px" }}>
              {/* <h4 style={{ fontWeight: "300", size: "36px" }}>
                - 2 Eggs <br />
                - 2 Tbsp Mayonnaise <br />
                - 3 Slices Bread <br />
                - A Little Butter <br />
                - 1/3 Carton Of Cress <br />
                - 2-3 Slices Of Tomato Or A Lettuce <br />
                - Crisps, To Serve <br />
              </h4> */}
              <h4 style={{ fontWeight: "300", size: "36px" }}>{recipes.Ingredient}</h4>
            </div>
            <div style={{ marginTop: "74px", marginLeft: "306px" }}>
              <h4 style={{ fontWeight: "500", fontSize: "48px" }}>Video Step</h4>
              <Button variant="warning" size="lg" style={{ width: "411px", height: "93px", marginTop: "42px" }}>
                <Link to={"/detailRecipe/detailVideo"}>
                  <img src={play} alt="button" />
                </Link>
              </Button>
            </div>
            <div style={{ marginTop: "140px", marginLeft: "306px" }}>
              <Form>
                <Form.Control as="textarea" placeholder="Comment :" style={{ width: "1300px", height: "380px", backgroundColor: "#F6F5F4", fontSize: "24px", paddingLeft: "40px", paddingTop: "35px" }} />
              </Form>
            </div>
            <div style={{ marginTop: "40px", marginLeft: "306px" }}>
              <Button variant="warning" size="lg" style={{ width: "426px", height: "64px", marginTop: "23px", marginLeft: "480px" }}>
                Send
              </Button>
            </div>
            <div style={{ marginTop: "49px", marginLeft: "320px" }}>
              <h3 style={{ fontWeight: "500", fontSize: "48px", color: "#3F3A3A" }}>Comment</h3>
              <div className="mt-4">
                <div className="row">
                  <div className="col-1">
                    <img src={miniprofile} alt="miniprofile" />
                  </div>
                  <div className="col-11">
                    <h5 style={{ fontWeight: "500", fontSize: "24px" }}>Ayudia</h5>
                    <h6 style={{ fontWeight: "400", fontSize: "24px" }}>Nice recipe. simple and delicious, thankyou</h6>
                  </div>
                </div>
              </div>
              {/* {comments ? comments.map((item) => item) : <p>No Comments Yet...</p>} */}
            </div>
          </div>
        </div>
      </main>
      <div style={{ marginTop: "356px" }}>
        <Footer />
      </div>
    </>
  );
};

export default DetailRecipe;
