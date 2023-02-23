import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { login, signup } from "../api";
import EmployeeList from "../pages/EmployeeList";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
function Routed() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (data) => {
    try {
    login(data).then((response)=>{
      console.log("response", response?.data?.user)
      localStorage.setItem('user',JSON.stringify(response.data?.user))
    })
    setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = (data) => {
   try {
       signup(data).then((response)=>{
      console.log("response", response?.data?.user)
      localStorage.setItem('user',JSON.stringify(response.data?.user))})
    setIsLoggedIn(true);
   } catch (error) {
    console.log(error);

   }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleLogout={handleLogout} isLoggedIn={isLoggedIn} />}
      ></Route>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Home handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
          ) : (
            <Login handleLogin={handleLogin} />
          )
        }
      ></Route>
      <Route
        path="/signup"
        element={
          isLoggedIn ? (
            <Home handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
          ) : (
            <Signup handleSignup={handleSignup} />
          )
        }
      ></Route>
      <Route
        path="/signup"
        element={
          isLoggedIn ? (
            <Home handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
          ) : (
            <Signup handleSignup={handleSignup} />
          )
        }
      ></Route>
       <Route
        path="/empolyeeList"
        element={
          isLoggedIn ? (
            <EmployeeList handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
          ) : (
            <Login handleLogin={handleLogin} />
          )
        }
      ></Route>
    </Routes>
  );
}

export default Routed;
