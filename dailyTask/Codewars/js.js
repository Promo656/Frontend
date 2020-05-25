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
function isDivideBy(number, a, b) {
    return number % a == 0 && number % b == 0
}
isDivideBy(12, 4, 3)