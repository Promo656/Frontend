import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            Article 1
            <Rating value={1} />
            <Accordion/>
            Article 2
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={5}/>

        </div>
    );
}

function AppTitle() {
    return <div>This is React APP</div>
}

function Hello() {
    alert("Hello")
}

Hello()


export default App;
