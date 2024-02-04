import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Expenses from "./Pages/Expenses";
import Dashboard from "./Pages/Dashboard";
import PeopleList from "./Pages/PeopleList";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import Rooms from "./Pages/Rooms";
import Adduser from "./Pages/Adduser";
import AddRent from "./Components/AddRent";
import AddExpense from "./Components/AddExpense";
import RentView from "./Components/RentView";
import Edituser from "./Components/Edituser";
import EditExpense from "./Components/EditExpense";
import SignUp from "./Pages/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="register" Component={SignUp}></Route>
        <Route path="expenses/edit/:id" Component={EditExpense}></Route>
        <Route path="user/edit/:id" Component={Edituser}></Route>
        <Route path="expense/add" Component={AddExpense}></Route>
        <Route path="user/add" Component={Adduser}></Route>
        <Route path="/" Component={App}></Route>
        <Route path="login" Component={Login}></Route>
        <Route path="dashboard" Component={Dashboard}></Route>
        <Route path="analytics" Component={Dashboard}></Route>
        <Route path="expenses" Component={Expenses}></Route>
        <Route path="rentlist" Component={RentView}></Route>
        <Route path="addrent" Component={AddRent}></Route>
        <Route path="list" Component={PeopleList}></Route>

      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
