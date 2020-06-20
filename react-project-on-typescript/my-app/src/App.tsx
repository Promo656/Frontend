import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is React APP"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={1} />
            <Accordion title={"Menu"} collapsed={false}/>
            <Accordion title={"SubMenu"} collapsed={true}/>
            <Accordion title={"SubSubMenu"} collapsed={false}/>
            Article 2
            <Rating value={4}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={5}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={1}/>
            <h1>Hello</h1>
        </div>
    );
}

type PageTitlePropsType={
    title:string
}

function PageTitle(props:PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
