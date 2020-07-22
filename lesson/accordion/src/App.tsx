import React from 'react';
import {Accordion, SubTitle} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/onOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";


function AppTitle(props:any) {
    return (
        <h1>{props.title}</h1>
    )
}
export function App() {
    return (
        <div>
            <AppTitle title="This is APP component"/>
            <SubTitle title={"Controlled Accordion"}/>
            <Accordion value="Menu" collapsed={true}/>
            <Accordion value="Users" collapsed={true}/>
            <SubTitle title={"Uncontrolled Accordion"}/>
            <UnControlledAccordion value={"Menu"} collapsed={true}/>
            <UnControlledAccordion value={"Users"} collapsed={true}/>
            <SubTitle title={"Controlled Rating"}/>
            <Rating value={0}/>
            <SubTitle title={"Uncontrolled Rating"}/>
            <UnControlledRating />
            <SubTitle title={"Controlled Toggle"}/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

