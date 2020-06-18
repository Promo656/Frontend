import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";

ReactDOM.render(<App/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


let a={
    name:"Vova",
    age:23,
    address:{
        city:"Moscow",
        country:"Russia"
    }
}
console.log(a.address.country)


let b:number|string|boolean
b=23
b=true
b="sdfj"

let c: Array<number | string | boolean>
c=[2,2312,123,123,123]
c=["ds","sd"]
c=[]
c=[true, false]
c=["dsd","sds", 23,234]
c=[23]
c=[true]
