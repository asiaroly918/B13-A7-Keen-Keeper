import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/footer";
import { Outlet } from "react-router";


const Rootlayout = () => {
  return (
    <div>
        <div>
            <Navbar/> 
            <Outlet/>
            <Footer/>
        </div>
        </div>
  );  

};

export default Rootlayout;    