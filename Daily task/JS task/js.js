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

var alfavit = "абвгдеёжзийклмнопрстуфхцчшщъьэюя"
var word = ""
while (word.length < 3) {
    word+=alfavit[Math.floor(Math.random() * alfavit.length)]
}
console.log(word)
