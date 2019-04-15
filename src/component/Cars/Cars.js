import React from "react";
import "./Cars.css";

const Cars = (props) => (

    <div className="col-3">

        <div className="vehicle">
            <span className="vehicle-name"> {props.name} </span>
            <img alt={props.name} src={require('../../images/' + props.image)} className="vehicle-image" onClick={props.clickHandler}/>
        </div>
        
    </div>

);

export default Cars;