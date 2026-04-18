import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/footer";

const Rootlayout = () => {
  return (
    <div>
        <div>
            <Navbar/> 
            <Outlet /> 
            <Footer/>
        </div>
        </div>
   );  

};

export default Rootlayout;    