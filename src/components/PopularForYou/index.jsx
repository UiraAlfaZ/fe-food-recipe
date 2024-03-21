import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const PopularForYou = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://food-recipe-api-production.up.railway.app/api/v1/recipe/data`)
      .then((res) => {
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayedRecipes = recipes.slice(0, 2);

  return (
    <>
      <div className="container">
        {/* Popular for you */}
        <div className="row" style={{ marginTop: "250px" }}>
          <div className="col-1">
            <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
          </div>
          <div className="col">
            <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>Popular For You !</h3>
          </div>
        </div>
        {/* Popular for you */}

        {/* Card recipe */}
        <div style={{ marginTop: "150px" }}>
          <div className="row justify-content-around" style={{ width: "1400px" }}>
            {displayedRecipes ? (
              displayedRecipes.map((item) => (
                <div className="col-6">
                  <div className="d-flex card" style={{ width: "639px", height: "636" }}>
                    <Link to={`/detailRecipe/${item.ID}`}>
                      <img src={require("../../assets/img/recipe1.png")} alt="popular1" />
                    </Link>
                    <h4 style={{ zIndex: "1", position: "absolute", marginTop: "500px", marginLeft: "50px", color: "#FFF5EC", fontSize: "42px", fontWeight: "500" }}>{item.Title}</h4>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading ...</p>
            )}

            {/* <div className="col-1" style={{ marginLeft: "650px" }}>
          <div className="d-flex card" style={{ width: "639px", height: "636px" }}>
            <Link to={"/detailRecipe"}>
              <img src={require("../../assets/img/recipe2.png")} alt="popular2" />
            </Link>
            <h4 style={{ zIndex: "1", position: "absolute", marginTop: "500px", marginLeft: "50px", color: "#FFF5EC", fontSize: "42px", fontWeight: "500" }}>King Burger</h4>
          </div>
        </div> */}
          </div>
          {/* Card recipe */}
        </div>
      </div>
    </>
  );
};

export default PopularForYou;
