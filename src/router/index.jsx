import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import NotFound from "../components/commom/404";
import LoginPage from "../feature/Acount/LoginPage";
import RegisterPage from "../feature/Acount/RegisterPage";
import Register from "../feature/Acount/RegisterPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
