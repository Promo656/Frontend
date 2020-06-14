import React from "react";

function Accordion() {
    return (
        <div>
            <AccTitle/>
            <AccMenu/>
        </div>
    )
}

function AccTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccMenu() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion