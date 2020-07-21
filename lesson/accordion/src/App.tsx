import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/onOff";


function AppTitle(props:any) {
    return (
        <h1>{props.title}</h1>
    )
}
export function App() {
    return (
        <div>
       {/*     <AppTitle title="This is APP component"/>
            <Accordion value="Menu" collapsed={true}/>
            <Accordion value="Users" collapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <OnOff on={true}/>
        </div>
    );
}

