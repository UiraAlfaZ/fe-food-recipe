import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Home from "../../pages/home";
import Forgot from "../../pages/auth/Forgot";
import Confirm from "../../pages/auth/Confirm";
import Register from "../../pages/auth/Register";
import AddRecipe from "../../pages/addRecipe";
import DetailRecipe from "../../pages/detailRecipe";
import Profile from "../../pages/profile";
import ResetPassword from "../../pages/auth/ResetPassword";
import DetailVideo from "../../pages/detailRecipe/detailVideo";
import ReqAuth from "../../components/ReqAuth";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace="true" />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Forgot" element={<Forgot />} />
          <Route path="/auth/Register" element={<Register />} />
          <Route path="/auth/Confirm" element={<Confirm />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/addRecipe"
            element={
              <ReqAuth>
                <AddRecipe />
              </ReqAuth>
            }
          />
          <Route
            path="/detailRecipe/:id"
            element={
              <ReqAuth>
                <DetailRecipe />
              </ReqAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <ReqAuth>
                <Profile />
              </ReqAuth>
            }
          />
          <Route path="/auth/ResetPassword" element={<ResetPassword />} />
          <Route path="/detailRecipe/detailVideo" element={<DetailVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
