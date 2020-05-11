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

var partOfBodyHuman=["Голова","Шея","Руки","Плечи","Пальцы на руках","Ноги","Колени","Глаза","Уши","Нос","Рот","Усы"]
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