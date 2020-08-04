//Написать тесты и разработать функцианал для следущих задач:
//1. Функция принимает число как параметр и должна возвращать следующие значения:
// 'Fuzz' если число кратно 2,
// 'Buzz' если число кратно 3
// 'FuzzBuzz' если число кратно и 2 и 3.
// * рассширить имплементацию функции: добавить возможность задавать параметры кратности;
// export function fuzzBuzz(num: number, mul1?: number, mul2?: number){
//     if (!isFinite(num) || num === null) throw new Error();
//     if (mul1 === undefined && mul2 === undefined) {
//         if (num % 2 === 0 && num % 3 === 0) return 'FuzzBuzz';
//         if (num % 2 === 0) return 'Fuzz';
//         if (num % 3 === 0) return 'Buzz';
//         return '';
//     }
//     if (!isFinite(mul1) || mul1 === null) throw new Error();
//     if (!isFinite(mul2) || mul2 === null) throw new Error();
//     if (num % mul1 === 0 && num % mul2 === 0) return 'FuzzBuzz';
//     if (num % mul1 === 0) return 'Fuzz';
//     if (num % mul2 === 0) return 'Buzz';
//     return '';
// }
export function fuzzBuzz(num, firstDiver, secondDiver) {
    if (firstDiver === void 0) { firstDiver = 2; }
    if (secondDiver === void 0) { secondDiver = 3; }
    if ([num, firstDiver, secondDiver].some(function (num) { return !isFinite(num) || num === null; }))
        throw new Error();
    function printer(divider, value) {
        return !(num % divider) ? value : '';
    }
    return "" + printer(firstDiver, 'Fuzz') + printer(secondDiver, 'Buzz');
}
// 2.
// Функция прнимает массив Man's и возвращает новый массив [{}, {}, {}],
// где проверяет возвраст каждого эелемента массива и
// в зависимости от него добавляет новое поле yearsOld
// со значениями из enum в текущий обьект в зависимотси от текущего значения
// age в элементе.
export var YearsOldType;
(function (YearsOldType) {
    YearsOldType["yang"] = "yang";
    YearsOldType["adult"] = "adult";
    YearsOldType["old"] = "old";
})(YearsOldType || (YearsOldType = {}));
export var startArray = [
    {
        name: 'Vlad',
        age: 87,
    },
    {
        name: 'Eugene',
        age: 55,
    },
    {
        name: 'Dima',
        age: 18,
    },
    {
        name: 'Ira',
        age: 3,
    }
];
export function addOldToObject(people) {
    return people.map(function (person) {
        if (!isFinite(person.age) || person.age === null || person.age < 0 || person.age >= 130)
            throw new Error();
        if (person.age < 18) {
            return Object.assign({}, person, { yearsOld: YearsOldType.yang });
        }
        if (person.age > 60) {
            return Object.assign({}, person, { yearsOld: YearsOldType.old });
        }
        return Object.assign({}, person, { yearsOld: YearsOldType.adult });
    });
}
///////////////////////////////////////////////////////////
export var filterType;
(function (filterType) {
    filterType["all"] = "all";
    filterType["done"] = "done";
    filterType["progress"] = "progress";
})(filterType || (filterType = {}));
export var journal = {
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
                    isDone: false,
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
///////////////////////////////////////////////////////////
//3. Функция должна вернуть [{task}, {task}] у которых поле isDone = true
export function getDoneTask(journal) {
    var result = [];
    journal.todoLists.forEach(function (todolist) {
        todolist.tasksList.forEach(function (task) {
            if (task.isDone) {
                result.push(task);
            }
        });
    });
    return result;
}
//4. Функция должна поменять поле isDone в текущей таске по её id мутируя исходный обьект;
export function changeTaskStatusById(journal, todoId, taskId) {
    journal.todoLists.forEach(function (list) {
        if (list.id === todoId) {
            list.tasksList.forEach(function (task) {
                if (task.id === taskId) {
                    task.isDone = !task.isDone;
                }
            });
        }
    });
}
// * повторный вызов getDoneTask должен вернуть другой результат
//# sourceMappingURL=dz.js.map