import React, {useState} from "react";
import "./../../App.css"

type PropsType={
    on:boolean
    onChange:(value:boolean)=>void
}

export function OnOff(props:PropsType) {

    let onStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "10px",
        backgroundColor:props.on? "green":"white"
    }
    let offStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "10px",
        backgroundColor: props.on? "white" : "red"

    }
    let lampstyle = {
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on? "green": "red"
    }
    let container = {
        display: "flex"
    }

    return (
        <div style={container}>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
            <div style={lampstyle}></div>
        </div>
    )
}