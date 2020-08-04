// console.log('Hello');
export var sum = function (a, b) {
    if (isFinite(a) && isFinite(b))
        return a + b;
    throw new Error();
};
export var chartUpperCase = function (base, number) {
    if (!isFinite(number) || base === null || number === null)
        throw new Error();
    if (typeof base !== 'string')
        throw new Error();
    if (base.length < number || number < 0)
        throw new Error();
    // for(let i = 0; i < base.length; i++){
    //     if(!(i % number)){
    //         result += base[i].toUpperCase();
    //     } else {
    //         result += base[i];
    //     }
    // }
    var newArr = [];
    base.split('').map(function (char, idx) {
        if ((idx + 1) % number === 0) {
            var newChar = char.toUpperCase();
            newArr.push(newChar);
        }
        else {
            newArr.push(char);
        }
    });
    return newArr.join("");
};
export var myFilter = function (numbers, predicat) {
    if (!numbers.length)
        throw new Error();
    if (typeof predicat !== 'function')
        throw new Error();
    return numbers.filter(function (elem) { return predicat(elem); });
};
//# sourceMappingURL=lesson1.js.map