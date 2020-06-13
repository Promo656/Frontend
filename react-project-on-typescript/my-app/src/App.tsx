import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>This is React APP</>
}

function Hello() {
    alert("Hello")
}

Hello()

function Rating() {
    console.log("Rating rendered")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    console.log("Star rendered")
    return (
        <div>
            <div>Star</div>
        </div>
    )
}

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

export default App;
