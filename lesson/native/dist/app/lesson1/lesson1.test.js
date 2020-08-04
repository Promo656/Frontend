import { sum, chartUpperCase, myFilter } from './lesson1';
describe('simple test', function () {
    it('should return valid value', function () {
        expect(sum(5, 5)).toEqual(10);
    });
    it('should return undefined', function () {
        expect(function () { return sum(undefined, undefined); }).toThrowError();
    });
    it('should return NaN', function () {
        expect(function () { return sum(5, NaN); }).toThrowError();
    });
});
describe('chart to upperCase', function () {
    it('should return valid string with 2', function () {
        var testString = 'shouldreturnstring';
        var res = 'sHoUlDrEtUrNsTrInG';
        expect(chartUpperCase(testString, 2)).toEqual(res);
    });
    it('should return valid string with 4', function () {
        var testString = 'shouldreturnstring';
        var res = 'shoUldrEturNstrIng';
        expect(chartUpperCase(testString, 4)).toEqual(res);
    });
    it('should throw error for invalid arguments', function () {
        var testString = 'shouldreturnstring';
        expect(function () { return chartUpperCase(undefined, 4); }).toThrowError();
        expect(function () { return chartUpperCase(null, NaN); }).toThrowError();
    });
    it('should throw error for invalid arguments 2', function () {
        var testString = 'shouldreturnstring';
        expect(function () { return chartUpperCase(testString, -45); }).toThrowError();
        expect(function () { return chartUpperCase(testString, 45); }).toThrowError();
    });
});
// [1,2,3,4,5],(number)=> .
describe('My filter', function () {
    it('Should return valid data structure', function () {
        var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(myFilter(testArray, function (num) { return !(num % 3); })).toEqual([3, 6, 9]);
        expect(myFilter(testArray, function (num) { return !(num % 4); })).toEqual([4, 8]);
    });
    it('Should return valid data structure', function () {
        expect(function () { return myFilter([], function (num) { return !(num % 3); }); }).toThrowError();
    });
    it('Should return valid data structure', function () {
        expect(function () { return myFilter([], null); }).toThrowError();
    });
});
//# sourceMappingURL=lesson1.test.js.map