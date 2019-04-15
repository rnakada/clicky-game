import React from "react";
import "./Navbar.css"; 

const Navbar = (props) => (

    <div className="container-fluid sticky-top">
        <div className="row">
            <div className="col-4 title text-center ">
                Cars
            </div>
            <div className="col-4 text-center ">
            
            </div>
            <div className="col-4 text-center ">
                Score: {props.score}
            </div>
        </div>
    </div>

);

export default Navbar;