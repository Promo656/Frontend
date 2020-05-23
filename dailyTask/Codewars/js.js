function calculateAge(date1, date2) {
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

function greet() {
    return "hello world!"
}
greet()
/*----------------------------------------------------------------------------- */
function myFirstKata(a, b) {
    if (typeof (a) !== "number" && typeof (b) !== "number") {
        return false
    } else if (typeof (a) == "string" || typeof (b) == "string") {
        return false
    } else {
        return a % b + b % a
    }
}
myFirstKata()
/*----------------------------------------------------------------------------- */
/* let odd = []
function count(number) {
    for (; number > 0; number--) {
        if (number % 2 !== 0) {
        return odd += odd.push(number)

        }
    }
}
console.log(count(4))
console.log(odd); */
/*----------------------------------------------------------------------------- */
/* let arr = []

for (let i = 0; i < 5; i++) {
    arr[i]+=i
}


console.log(arr) */