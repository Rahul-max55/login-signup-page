import React from "react";
import "./Alert.css";


const Alert = (props) => {


    const alertPara = {
        color: "black", fontWeight: "400",
        fontSize: "18px"
    }
    const alertSpan = {
        color: `${props.color}`, fontWeight: "600"
    };


    return (
        <>
            <div className="alert" >
                <p style={alertPara}><span style={alertSpan} >{props.value}</span>   {props.msg} </p>
            </div>
        </>

    )
}

export default Alert;
