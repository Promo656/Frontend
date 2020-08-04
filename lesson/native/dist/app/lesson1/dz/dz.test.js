import { addOldToObject, changeTaskStatusById, filterType, fuzzBuzz, getDoneTask, journal, startArray, YearsOldType } from "./dz";
describe('home work', function () {
    describe('task1', function () {
        it('fuzzBuzz should be defined', function () {
            expect(fuzzBuzz).toBeDefined();
        });
        it('throw an error if argument not a number', function () {
            expect(function () { return fuzzBuzz(null); }).toThrowError();
            expect(function () { return fuzzBuzz(undefined); }).toThrowError();
            expect(function () { return fuzzBuzz(NaN); }).toThrowError();
            expect(function () { return fuzzBuzz(Infinity); }).toThrowError();
        });
        it('if the argument is multiple of number 2 then fuzzBuzz must return "Fuzz"', function () {
            expect(fuzzBuzz((2))).toEqual('Fuzz');
            expect(fuzzBuzz((4))).toEqual('Fuzz');
            expect(fuzzBuzz((8))).toEqual('Fuzz');
            expect(fuzzBuzz((10))).toEqual('Fuzz');
            expect(fuzzBuzz(10, 5, 7)).toEqual('Fuzz');
            expect(fuzzBuzz(30, 10, 9)).toEqual('Fuzz');
        });
        it('if the argument is multiple of number 3 then fuzzBuzz must return "Buzz"', function () {
            expect(fuzzBuzz((3))).toEqual('Buzz');
            expect(fuzzBuzz((9))).toEqual('Buzz');
            expect(fuzzBuzz((15))).toEqual('Buzz');
            expect(fuzzBuzz((21))).toEqual('Buzz');
            expect(fuzzBuzz(28, 5, 7)).toEqual('Buzz');
            expect(fuzzBuzz(36, 10, 9)).toEqual('Buzz');
        });
        it('if the argument is multiple of number 2 and 3 then fuzzBuzz must return "FuzzBuzz"', function () {
            expect(fuzzBuzz((0))).toEqual('FuzzBuzz');
            expect(fuzzBuzz((6))).toEqual('FuzzBuzz');
            expect(fuzzBuzz((12))).toEqual('FuzzBuzz');
            expect(fuzzBuzz((18))).toEqual('FuzzBuzz');
            expect(fuzzBuzz(35, 5, 7)).toEqual('FuzzBuzz');
            expect(fuzzBuzz(90, 10, 9)).toEqual('FuzzBuzz');
        });
        it('if the argument is not multiple of number 2 and 3 then fuzzBuzz must return ""', function () {
            expect(fuzzBuzz((1))).toEqual('');
            expect(fuzzBuzz((-1))).toEqual('');
            expect(fuzzBuzz((5))).toEqual('');
            expect(fuzzBuzz((7))).toEqual('');
            expect(fuzzBuzz(5, 2, 7)).toEqual('');
            expect(fuzzBuzz(-7, 3, 8)).toEqual('');
        });
    });
    describe('task2', function () {
        it('addOldToObject should be defined', function () {
            expect(addOldToObject).toBeDefined();
        });
        it('start array not to be equal addOldToObject result', function () {
            expect(addOldToObject(startArray)).not.toBe(startArray);
        });
        it('if age has invalid data addOldToObject must throw an error', function () {
            var testData = [
                {
                    name: 'Vlad',
                    age: undefined,
                },
            ];
            expect(function () { return addOldToObject(testData); }).toThrowError();
            var testData1 = [
                {
                    name: 'Vlad',
                    age: NaN,
                },
            ];
            expect(function () { return addOldToObject(testData1); }).toThrowError();
            var testData2 = [
                {
                    name: 'Vlad',
                    age: null,
                },
            ];
            expect(function () { return addOldToObject(testData2); }).toThrowError();
            var testData3 = [
                {
                    name: 'Vlad',
                    age: Infinity,
                },
            ];
            expect(function () { return addOldToObject(testData3); }).toThrowError();
            var testData4 = [
                {
                    name: 'Vlad',
                    age: -1,
                },
            ];
            expect(function () { return addOldToObject(testData4); }).toThrowError();
            var testData5 = [
                {
                    name: 'Vlad',
                    age: 130,
                },
            ];
            expect(function () { return addOldToObject(testData5); }).toThrowError();
        });
        it('if age < 18 addOldToObject must add field "yearsOld" with value "young"', function () {
            var testData = [
                {
                    name: 'Vlad',
                    age: 15,
                },
            ];
            var result = {
                name: 'Vlad',
                age: 15,
                yearsOld: YearsOldType.yang,
            };
            expect(addOldToObject(testData)).toContainEqual(result);
        });
        it('if age > 60 addOldToObject must add field "yearsOld" with value "old"', function () {
            var testData = [
                {
                    name: 'Vlad',
                    age: 65,
                },
            ];
            var result = {
                name: 'Vlad',
                age: 65,
                yearsOld: YearsOldType.old,
            };
            expect(addOldToObject(testData)).toContainEqual(result);
        });
        it('if 17 < age < 61 addOldToObject must add field "yearsOld" with value "adult"', function () {
            var testData = [
                {
                    name: 'Vlad',
                    age: 18,
                },
            ];
            var result = {
                name: 'Vlad',
                age: 18,
                yearsOld: YearsOldType.adult,
            };
            expect(addOldToObject(testData)).toContainEqual(result);
            var testData2 = [
                {
                    name: 'Vlad',
                    age: 60,
                },
            ];
            var result2 = {
                name: 'Vlad',
                age: 60,
                yearsOld: YearsOldType.adult,
            };
            expect(addOldToObject(testData2)).toContainEqual(result2);
        });
        it('should correct work addOldToObject with startArray', function () {
            var result = [
                {
                    name: 'Vlad',
                    age: 87,
                    yearsOld: YearsOldType.old
                },
                {
                    name: 'Eugene',
                    age: 55,
                    yearsOld: YearsOldType.adult
                },
                {
                    name: 'Dima',
                    age: 18,
                    yearsOld: YearsOldType.adult
                },
                {
                    name: 'Ira',
                    age: 3,
                    yearsOld: YearsOldType.yang
                }
            ];
            expect(addOldToObject(startArray)).toEqual(result);
        });
    });
    describe('task3', function () {
        it('getDoneTask should be defined', function () {
            expect(getDoneTask).toBeDefined();
        });
        it('should return correct result', function () {
            var result = {
                id: '2a',
                isDone: true,
                title: 'Learn useEffect'
            };
            expect(getDoneTask(journal)).toEqual([result]);
            expect(getDoneTask(journal).length).toEqual(1);
        });
        it('should work correct', function () {
            changeTaskStatusById(journal, '1a', '1a');
            var result = [
                {
                    id: '1a',
                    isDone: true,
                    title: 'Learn hooks'
                },
                {
                    id: '2a',
                    isDone: true,
                    title: 'Learn useEffect'
                }
            ];
            expect(getDoneTask(journal)).toEqual(result);
            expect(getDoneTask(journal).length).toEqual(2);
        });
    });
    describe('task4', function () {
        var copy;
        beforeEach(function () {
            copy = JSON.parse(JSON.stringify(journal));
        });
        it('changeTaskStatusById should be defined', function () {
            expect(changeTaskStatusById).toBeDefined();
        });
        it('should not be equal', function () {
            changeTaskStatusById(copy, '1a', '1a');
            expect(copy).not.toEqual(journal);
        });
        it('should not mutate', function () {
            changeTaskStatusById(copy, 'sdfdfs', 'wesss');
            expect(copy).toEqual(journal);
        });
        it('should work correct', function () {
            var result = {
                title: 'first journal',
                id: '1cvlasd',
                todoLists: [
                    {
                        title: 'Learn React',
                        id: '1a',
                        filter: filterType.all,
                        tasksList: [
                            {
                                id: '1a',
                                isDone: true,
                                title: 'Learn hooks'
                            },
                            {
                                id: '2a',
                                isDone: true,
                                title: 'Learn useEffect'
                            },
                            {
                                id: '3a',
                                isDone: false,
                                title: 'Learn Redux'
                            }
                        ]
                    },
                ]
            };
            changeTaskStatusById(copy, '1a', '1a');
            expect(copy).toEqual(result);
            changeTaskStatusById(copy, '1a', '1a');
            expect(copy).toEqual(journal);
        });
    });
});
//# sourceMappingURL=dz.test.js.map