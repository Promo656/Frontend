/*
var dino=[]
dino.push("Valera")
dino.push("Dima")
dino.push("Egor")
dino.push("Kolya")
dino.push("Alex")
var last=dino.pop()
console.log(last, dino)
console.log(dino.pop(), dino)
console.log(dino.pop(), dino)
console.log("----------------------------------------------")
var array1=["a","b","c","d","e"]
var array2=[1,2,3,4,5]
var array3=["Egor", ["22",6432,"Vova"], "Dima"]
console.log(array1.concat(array2,array3))
console.log("-----------------------------------------------")
var color=["Red","Green","Blue"]
console.log(color.indexOf("Green"),color[1])
console.log("-----------------------------------------------")
var obj1=["Monkey","Cat","Fish"]
console.log(obj1.join(" - "))
console.log(obj1.join(" * "))
console.log(obj1.join(" and "))
console.log(obj1.join(" "))
console.log(obj1.join())
console.log(obj1.join(" ,"))
console.log(array1.concat(array2,array3).join("*"))
console.log("-------------------------------------------------")
console.log(Math.random())
console.log(Math.floor(Math.random()*13))
console.log("-------------------------------------------------")
var random=Math.floor(Math.random()*13)
var array4=array1.concat(array2,array3)
console.log(array4[random])
console.log(array4[Math.floor(Math.random()*13)])
console.log(array4[Math.floor(Math.random()*array4.length)])
console.log("-------------------------------------------------") */

/* var arr1=["a","b","c"]
var arr2=[1,2,3]
console.log(arr1.concat(arr2));
console.log("-------------------------------------------------")

var arr3=["a","b","c"]
arr3.push(1,2,3,4,5)
console.log(arr3);
console.log("-------------------------------------------------")

arr1.reverse()
console.log(arr1);
console.log("-------------------------------------------------")

arr3.unshift(7,5,0)
console.log(arr3);
console.log("-------------------------------------------------")

var arr4=["JS","CSS","JQ"]
console.log(arr4.shift(),arr4.pop());
console.log("-------------------------------------------------")

var arr5=[1,2,3,4,5]
var arr6=arr5.slice(0,3)
var arr7=arr5.slice(3)
console.log(arr6)
console.log(arr7);
console.log("-------------------------------------------------") */

/* var obj2 = [
    4,
    "Egor",
    "67",
    3435,
    [
        "Dima",
        53948,
        "7654",
        "Vova"
    ]
]
var obj3=[
    "BMW",
    "AUDI",
    "NISAN"
]
console.log(obj2.reverse());
console.log(obj2.concat(obj3));
console.log(obj2.indexOf("Egor"));
console.log(obj2.join(" * "));
console.log("-------------------------------------------------")*/

/* var partOfBodyHuman=["Голова","Шея","Руки","Плечи","Пальцы на руках","Ноги","Колени","Глаза","Уши","Нос","Рот","Усы"]
var adjective=["Прекраснее","Ошеломительнее","Удивительнее","Вызывающее","Невразумительнее","Отвратительнее","Ахринительнее"]
var partOfBodyAnimal=["Голова","Жопка","Клюв","Хвост","Усы","Хохолок","Когти","Кишки","Желчный пузырь","Жабры","Глаза","Щупальца"]
var animal=["Макаки","Лошади","Верблюда","Коровы","Свиньи","Петуха","Окулы","Лягушки","Таракана","Осьминога"]
var sentences=[
    "У тебя ",partOfBodyHuman[Math.floor(Math.random()*partOfBodyHuman.length)],
    "еще более ",adjective[Math.floor(Math.random()*adjective.length)],
    ", чем ",partOfBodyAnimal[Math.floor(Math.random()*partOfBodyAnimal.length)],
    "у ",animal[Math.floor(Math.random()*animal.length)]
]
console.log((sentences.join(" ").slice(0,1).toUpperCase(),sentences.join(" ").slice(1).toLowerCase()));
console.log("-------------------------------------------------") */

/* var arr8=[3,2,1]
console.log(arr8.join(" больше, чем "));
console.log("-------------------------------------------------") */

/* var dog={
    name:"Bim",
    age:6,
    color:"White",
    bark:"Gav-Gav"
}
var cat={
    name:"Lusi",
    age:8,
    color:"Black",
}
cat.legs=3
var monkey={}
monkey["name"]="Bobo"
monkey["age"]=65476
monkey["color"]="Blue"
monkey.legs=4

console.log(Object.keys(dog));
console.log(Object.keys(cat));
console.log(monkey);
console.log("---------------------------------------------------------"); */

/* var vova = {
    name: "Vova",
    age: 20,
    lNumbers:
        [
            3,
            7,
            9
        ]
}
var dima = {
    name: "Dima",
    age: 19,
    lNumbers: [
        23,
        58,
        20
    ]
}
var kolya = {
    name: "Kolya",
    age: 18,
    lNumbers: [
        96,
        82,
        51
    ]
}
var friends=[vova,dima,kolya]
vova.age+=3
console.log(friends[0]);
 */

/* var movies={
    "Nemo":{
        releaseDate:2003,
        duration:100,
        actors:[
            "Albert Broks",
            "Elen Fox",
            "Alex Gold"
        ],
        format:"DVD"
    },
    "Star Wars":{
        releaseDate:1983,
        duration:134,
        actors:[
            "Mark Hemil",
            "Harison Ford",
            "Keri Fisher"
        ],
        format:"DVD"
    },
    "Harry Potter":{
        releaseDate:2005,
        duration:157,
        actors:[
            "Deniel Radklief",
            "Emma Uotson",
            "Ruppert Green"
        ],
        format:"Blue-Ray"
    }
}
movies["Frozen"]={
        releaseDate:2018,
        duration:184,
        actors:[
            "Person1",
            "Person2",
            "Person3"
        ],
        format:"VHS"
    }
console.log(Object.keys(movies));
console.log("---------------------------------------------------------"); */

/* var scores={
    Dima:0,
    Vova:0,
    Kirill:0
}
scores.Dima+=1
scores.Kirill+=3
scores.Vova+=8
console.log(scores);
console.log("---------------------------------------------------------"); */

/* var obj4 = {
    "name":"Some obj",
    "Some arr":[
        7,
        9,
        {
            purpose:"Net",
            number:123
        },
        3.3
    ],
    "random animal":"Shrimp"
}
console.log(obj4["Some arr"][2]["number"]);
console.log("---------------------------------------------------------"); */

/* var name="Nokola"
console.log("Hello, "+name);
if (name.length>6) {
    console.log("Very long name");
} else {
    console.log("You have short name");
}
console.log("---------------------------------------------------------"); */

/* var name="Elena"
if (name==="Egor") {
    console.log("Hello, "+name);
} else if (name==="Elena") {
    console.log("Hello, "+name);
} else if (name==="Genia") {
    console.log("Hello, "+name);
}
else {
    console.log("Hello stranger");
}
console.log("---------------------------------------------------------"); */

/* var sheep=0
while (sheep<=10) {
    console.log("Sheeps count:"+sheep);
    sheep++
}
console.log("HRRRRRRRRRPPP");

for (sheep=0; sheep<=10; sheep++) {
    console.log("Sheeps count:"+sheep);
}
console.log("HRRRRRRRRRPPP");

var hi=5
for (i=0; i<hi; i++) {
    console.log("Hello");
}
console.log("---------------------------------------------------------");*/

/* var zoo=[
    "Cow",
    "Frog",
    "Cat",
    "dog"
]
for (i=0; i<zoo.length; i++) {
    console.log("We have: " + zoo[i]);
}

var name="Hello, my name is Egor"
for (i=0; i<name.length; i++) {
    console.log(name[i]);
}

for (x=3; x<10000; x*=3) {
    console.log(x);
}
console.log("---------------------------------------------------------"); */

/* var alfavit = "javascript is awesome"
var word = ""
for (var i=0; i<alfavit.length; i++) {
    if (alfavit[i]==="a") {
        word+="4"
    } else if (alfavit[i]==="e") {
        word+="3"
    } else if (alfavit[i]==="i") {
        word+="1"
    } else if (alfavit[i]==="o") {
        word+="0"
    } else {
        word+=alfavit[i]
    }
}
console.log(word);
document.write(word)
console.log("---------------------------------------------------------"); */

/* var alfavit="абвгдеёжзийклмнопрстуфхцчшщьъэюя"
var sum=""
for (var i=0; i<6; i++) {
    sum+=alfavit[Math.floor(Math.random()*alfavit.length)]
}
console.log(sum);
console.log("---------------------------------------------------------"); */

/* let randomNumber = Math.floor(Math.random() * 900 + 100).toString()
if (randomNumber[2] == 0) {
    console.log(randomNumber);
} else {
    randomNumber -= randomNumber[2]
    console.log(randomNumber)
}
console.log("---------------------------------------------------------"); */

/* let num = Math.floor(Math.random() * 900 + 100).toString()
let result = ""
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
        console.log(num[i]);
    }
}
console.log("---------------------------------------------------------");  */

/* let myFerstFunction=function() {
    console.log(("Hello"))
};
myFerstFunction();
console.log("---------------------------------------------------------");

let sayHiTo=function(name){
    console.log("Hi "+ name);
}
sayHiTo("Nick")
sayHiTo("Anna")
console.log("---------------------------------------------------------");

let drawCat= function(howManyTimes){
    for(let i=0; i<howManyTimes; i++) {
        console.log(i+ " =^.^=");
    }
}
drawCat(5)
console.log("---------------------------------------------------------");
let whatToDraw=function(howManyTimes, what) {
    for (let i=0; i<howManyTimes; i++){
        console.log(i+ " "+ what);
    }
}
whatToDraw(10, "@@@@@@")
console.log("---------------------------------------------------------");

var double=function (ch) {
    return ch * 2
    }
    console.log(double(5))
    console.log(double(double(3)))
    console.log("---------------------------------------------------------") */

/*     let pickRandomWord=function(words) {
        return words[Math.floor(Math.random()*words.length)]
    }
    var randomWords=[
        "World",
        "Planet",
        "Monkey",
        "Frog",
        1,
        2,
        3
    ]
    console.log(pickRandomWord(randomWords))
    console.log(pickRandomWord(["Dima","Vova","Kolya"]))
    console.log("---------------------------------------------------------") */

/*     function multy(n1,n2) {
        return n1*n2
    }
    function sum(n3,n4) {
        return n3+n4
    }
    console.log(multy(5,4)+sum(8,2))
    console.log("---------------------------------------------------------") */

/*     var fiftLetter=function(name){
        if (name.langth<5) {
            return
        }
        return console.log("Fifth letters is: "+ name[4]);
    }
    fiftLetter("Nikola")
    console.log("---------------------------------------------------------") */

/*     let medalForScore=function(score){
        if (score<3){
            return console.log("Bronz");
        }
        if (score<7){
            return console.log("Silver");
        }
        return console.log("Gold");
    }

    console.log(medalForScore(9));
    console.log("---------------------------------------------------------") */

/*     let arr1=[1,2,3,4]
    let arr2=[1,2,3,4]
    let arr3=[4,3,2,1,0]
    let arr4=[4,3,2,1]

    function compare(item1,item2) {
        if (item1.length !== item2.length) {
            return  console.log("Length is different")
        }
        return item1.join("")==item2.join("")
    }
    console.log(compare(arr1,arr3))
    console.log("---------------------------------------------------------") */

/*     let Car=function(x,y){
        this.x=x
        this.y=y
    }
    let tesla=new Car(10,20)
    console.log(tesla); */

/*     let func1=function(){
        return prompt("WhatsUp?")
    }

    let func2=function(){
        return "I am:"
    }

    alert(func2()+func1()) */

/*     let func1=function(){
        return 4*3
    }

    let func2=function(){
        return 10+20
    }

    let sum=function(n1,n2){
        return n1+n2
    }

    alert(sum(func1(),func2())) */

/* function str(n) {
    return n.toString();
}
str() */
/*----------------------------------------------------------------------------- */

/* function ask(question, yes, no) {
    if (confirm(question)){
        yes()
    } else {
        no()
    }
}
function ansok(){
    alert("Ok")
}
function ansno(){
    alert("No")
}

ask("What your answer?",ansok, ansno) */
/*----------------------------------------------------------------------------- */

/* function ask(question, yes, no){
    if(confirm(question)){
        yes()
    } else {
        no()
    }
}

ask("What answer",
function(){alert("Answer Yes")},
function(){alert("Answer NO")}
) */
/*----------------------------------------------------------------------------- */

/* const makePizza = function (title, cb) {
    console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);
    setTimeout(cb, 3000);
}

const readBook = function () {
    console.log('Читаю книгу «Колдун и кристалл»…');
}

const eatPizza = function () {
    console.log('Ура! Пицца готова, пора подкрепиться.');
}

makePizza('Пеперонни', eatPizza);
readBook(); */
/*----------------------------------------------------------------------------- */

/* function doHomework(name, cb) {
    setTimeout(start(name),4000)
    cb()
}

function start(name){
    console.log(`Starting my ${name} homework`);
}

function finish() {
    console.log("Finished my homework");
}

doHomework("math", finish) */
/*----------------------------------------------------------------------------- */

/* function call(name, cb) {
    setTimeout(callfone(name), 1000);
    cb()
}

function answerphone() {
    console.log('Оставьте ваше сообщение');
}

function callfone(name) {
    console.log(`I calling you, ${name}`)
}

call("Egor", answerphone); */
/*----------------------------------------------------------------------------- */

/* function loadScript(src, callback){
    let script=document.createElement("script")
    script.src=src
    document.body.append(script)
    script.onload = function(){
        callback(script);
    } 
}
loadScript(`test.js`, function(){
    show()
}) */


