import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewRecipe = () => {
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

  const displayedRecipes = recipes.slice(0, 1);

  return (
    <>
      {/* New Recipe */}
      <div className="row" style={{ marginTop: "250px" }}>
        <div className="col-1">
          <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "25px", height: "140px" }}></div>
        </div>
        <div className="col">
          <h3 style={{ fontSize: "48px", fontWeight: "500", marginTop: "40px" }}>New Recipe!</h3>
        </div>
      </div>
      {/* New Recipe */}

      <div style={{ marginTop: "95px" }}>
        <div style={{ border: "1px solid #EFC81A", backgroundColor: "#EFC81A", width: "514px", height: "820px", marginTop: "" }}>
          {/* Card New Recipe */}
          <div className="row" style={{ marginTop: "81px", marginLeft: "135px", zIndex: "0", position: "absolute" }}>
            <div className="col">
              <div className="d-flex card" style={{ width: "800px", height: "800" }}>
                <img src={require("../../assets/img/recipe3.png")} alt="popular1" />
              </div>
            </div>
          </div>
          {/* recipe desc */}

          <div style={{ marginLeft: "1130px", marginTop: "323px", width: "570px", height: "" }}>
            <div className="row">
              {displayedRecipes ? (
                displayedRecipes.map((item) => (
                  <div className="col-12">
                    <h3 style={{ fontSize: "56px" }}>{item.Title}</h3>
                    <div className="mt-5" style={{ border: "1px solid black", width: "100px" }}></div>
                    <div className="mt-5">
                      <h5 style={{ fontSize: "24px" }}>{item.ingredient}</h5>
                    </div>
                    <Link to={`/detailRecipe/${item.ID}`}>
                      <Button variant="warning" size="lg" style={{ width: "200px", height: "64px", marginTop: "50px" }}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Loading ...</p>
              )}
            </div>
          </div>
          {/* recipe desc */}
        </div>
      </div>
      {/* Card New Recipe */}
    </>
  );
};

export default NewRecipe;
