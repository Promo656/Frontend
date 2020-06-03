/* function calculateAge(date1, date2) {
    if (date2 - date1 == 1) {
        return "You are " + (date2 - date1) + " year old."
    } else if (date1 - date2 == 1) {
        return "You will be born in " + (date1 - date2) + " year."
    } else if (date1 == date2) {
        return "You were born this very year!"
    } else if (date1 > date2) {
        return "You will be born in " + (date1 - date2) + " years."
    } else if (date1 < date2) {
        return "You are " + (date2 - date1) + " years old."
    }
}
calculateAge(1994, 2020);

/*----------------------------------------------------------------------------- */

/* function myFirstKata(a, b) {
    if (typeof (a) !== "number" && typeof (b) !== "number") {
        return false
    } else if (typeof (a) == "string" || typeof (b) == "string") {
        return false
    } else {
        return a % b + b % a
    }
}
myFirstKata() */
/*----------------------------------------------------------------------------- */

/* function num(n) {
    sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(num(3)) */
/*----------------------------------------------------------------------------- */

/* function numberToPower(number, power) {
    let sum = 1
    for (let i = 0; i < power; i++) {
        sum *= number
    }
    return sum
}
console.log(numberToPower(10,4)) */
/*----------------------------------------------------------------------------- */

/* function add(a, b){
	return (a == b)
}
add() */
/*----------------------------------------------------------------------------- */

/* function pointsPer48(ppg, mpg) {
    if (ppg && mpg !== 0) {
        return parseFloat(((ppg * 48) / mpg).toFixed(1))
    } else {
        return 0
    }
}
pointsPer48(12,15) */
/*----------------------------------------------------------------------------- */
/* function isDivideBy(number, a, b) {
    return number % a == 0 && number % b == 0
}
isDivideBy(12, 4, 3) */
/*----------------------------------------------------------------------------- */

/* const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg*fuelLeft>=distanceToPump
};
  zeroFuel(100,50,1) */
/*----------------------------------------------------------------------------- */

/* function litres(time) {
    return Math.floor(time * 0.5)
}
litres(11.8) */
/*----------------------------------------------------------------------------- */

/* function arrayPlusArray(arr1, arr2) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr1.length; i++) {
        sum2 += arr2[i]
        sum1 += arr1[i]
    }
    return sum1 + sum2
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) */
/*----------------------------------------------------------------------------- */

/* function squareOrSquareRoot(arr1) {
    let arr2 = []
    for (let i = 0; i < arr1.length; i++) {
        if (Number.isInteger(Math.sqrt(arr1[i]))) {
            arr2.push(Math.sqrt(arr1[i]))
        } else {
            arr2.push(arr1[i] * arr1[i])
        }

    }
    return arr2
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])) */
/*----------------------------------------------------------------------------- */

/* let arr2=[6,3,8,9,1,4,7]
let min=0
let max=0
for(let i=0; i<arr2.length; i++){
    if (arr2[i]>arr2[i+1]){
        max=arr2[i]
    } else {
        min=arr2[i+1]
    }
}
console.log(min+max) */
/* var arr3 = [6,3,2,1,5,9,7,4,8];

for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > arr3[0]) {
        arr3[0] = arr3[i];
    }

}
alert(arr3[0]); */
/*----------------------------------------------------------------------------- */
/* function findMax(arr3) {
    for(var i = 0; i < arr3.length; i++) {
        if (arr3[i] > arr3[0]) {
            arr3[0] = arr3[i];
        }
    }
    return alert(arr3[0]);
}
console.log(findMax([3,6,9,2,8, 45])) */
/*----------------------------------------------------------------------------- */

/* function basicOp(operation, value1, value2)
{
while (operation=="-"){
return value1-value2
}
while (operation=="+"){
return value1+value2
}
while (operation=="*"){
return value1*value2
}
while (operation=="/"){
return value1/value2
}
}
basicOp() */
/*----------------------------------------------------------------------------- */

/* let func = function (name) {
    if (name == "Egor") {
        return alert("HI " + name)
    } else {
        return alert("Hello stranger")
    }
}
func(Egor) */
/*----------------------------------------------------------------------------- */

/* function positiveSum(arr1) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            sum += arr1[i]
        }
    }
    return sum
}
positiveSum([1, 2, 3, 4, 5]) */
/*----------------------------------------------------------------------------- */

/* function maps(arr1) {
    let arr2 = []
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i] * 2)
    }
    return arr2
}
maps([1, 2, 3]) */
/*----------------------------------------------------------------------------- */

/* function numberToString(num) {
    return num.toString()
}
numberToString(76) */
/*----------------------------------------------------------------------------- */

/* function isReallyNaN(val) {
    return Number.isNaN(val)
};
isReallyNaN(4) */
/*----------------------------------------------------------------------------- */

/* function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}
squareSum([1,2,2]) */
/*----------------------------------------------------------------------------- */

function grow(x){
    let sum=1
    for (let i=0; i<x.length; i++){
    sum*=x[i]
    }
    return sum
    }
    grow(2,3,4)