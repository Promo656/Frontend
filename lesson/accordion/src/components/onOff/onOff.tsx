import React from "react";
import "./../../App.css"

type PropsType={
    on:boolean
}
export function OnOff(props:PropsType) {
    let onStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline",
        margin:"5px"
    }
    let offStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline",
        margin:"5px"
    }
    let lampstyle={
        width:"10px",
        height:"10px",
        borderRadius:"10px",
        border:"1px solid black",
        display:"inline-block"
    }


return(
    <div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={lampstyle}></div>
    </div>
)
}