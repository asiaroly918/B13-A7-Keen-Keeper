import React from "react";

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