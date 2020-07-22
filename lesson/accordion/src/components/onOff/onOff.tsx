import React, {useState} from "react";
import "./../../App.css"



export function OnOff() {
    let [on,setOn]=useState(false)

    let onStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "10px",
        backgroundColor:on? "green":"white"
    }
    let offStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "10px",
        backgroundColor: on? "white" : "red"

    }
    let lampstyle = {
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on? "green": "red"
    }
    let container = {
        display: "flex"
    }


    return (
        <div style={container}>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={lampstyle}></div>
        </div>
    )
}