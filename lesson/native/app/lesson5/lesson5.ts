console.log('lesson 5');


// function createPromise(data: string, delay: number, condition: boolean){
//     return new Promise((res, rej) => {
//         setTimeout(condition ? res : rej,delay * 1000, data);
//     })
// }

//
// const test2 = Promise.allSettled([
//     createPromise('test1', 4, true),
//     createPromise('test2', 2, true),
//     createPromise('test3', 2, true)
// ])
//
// test2.then(console.log).catch(console.log)

// testPromise
//     .then((res: number) => res * 2 )
//     .then((res) => res - 10)
//     .then((res) => res - 100)
//     .then(res => console.log(res))
//     .catch(res => console.log(res))
//     .finally();


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// const task1 = new Promise((res,reject) =>{
//     console.log('Чёта там...')
// })
// console.log(task1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const testPromise = new Promise ((resolve, reject) => {
//     resolve("Promise Data")
// })
// testPromise.then(console.log)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// const testPromise = new Promise ((res,rej) => {
//     rej("Promise Error")
// })
// testPromise.then(console.log, console.log)
// testPromise.then(console.log).catch((e) => {})


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// type TestObj = {
//     promise: Promise<string> | null;
//     resolve: Function | null;
//     reject: Function | null;
//     onSuccess: (paramName: string) => void;
//     onError: (paramName: string) => void;
// }
//
// const handlePromise: TestObj = {
//     promise : null,
//     resolve : null,
//     reject : null,
//     onSuccess,
//     onError,
// }
//
// function onSuccess (paramName:string) {
//     console.log(`Promise is resolved with data: ${paramName}`);
// }
// function onError (paramName: string) {
//     console.log(`Promise is rejected with error: ${paramName}`);
// }
//
// function createPromise() {
//     handlePromise.promise = new Promise((res, rej) => {
//         handlePromise.resolve = res;
//         handlePromise.reject = rej;
//     });
//     handlePromise.promise.then(res => console.log(res)).catch(err => console.log(err));
//     console.log('handlePromise ', handlePromise);
// }
//
// const promiseResolve = document.getElementById("btn-resolve-promise");
// promiseResolve.addEventListener('click', () => {
//     const result = '1'
//     handlePromise.resolve(result);
//     handlePromise.promise.then(res => handlePromise.onSuccess(res));
//     console.log('Promise resolve  ', handlePromise);
// });
// const promiseReject = document.getElementById("btn-reject-promise");
// promiseReject.addEventListener('click', () =>{
//     const result = '0'
//     handlePromise.reject(result);
//     handlePromise.promise.catch(err => handlePromise.onError(result));
//     console.log('Promise Reject ', handlePromise);
// });
//
// const createPromiseBytton = document.getElementById("btn-create-promise");
// createPromiseBytton.addEventListener('click', createPromise);
//
// type TestObjectT = {
//     promise: Promise<T> | null;
//     resolve: Function | null;
//     reject: Function | null;
//     onSuccess: (paramName: string) => void;
//     onError: (paramName: string) => void;
// }
//
// const handlePromise: TestObjectT = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: function (paramName) {
//         console.log(`Promise is resolved with data: ${paramName}`);
//     },
//     onError: function (paramName) {
//         console.log(`Promise is rejected with error: ${paramName}`);
//     },
// }
//
// const creatBtn = document.getElementById('btn-create-promise');
// creatBtn.addEventListener('click', () => {
//     handlePromise.promise = new Promise((res, rej) => {
//         handlePromise.resolve = res;
//         handlePromise.reject = rej;
//     })
//     console.log('Promise was created');
//
//
// });
//
// const resolveBtn = document.getElementById('btn-resolve-promise');
// resolveBtn.addEventListener('click', () => {
//     handlePromise.resolve('1');
//     //handlePromise.promise.then(res => handlePromise.onSuccess(res));
// })
//
// const rejectBtn = document.getElementById('btn-reject-promise');
// rejectBtn.addEventListener('click', () => {
//     handlePromise.reject('0');
//     //handlePromise.promise.then(null, err => handlePromise.onError(err));
// })
//
//
// handlePromise.promise.then(res => handlePromise.onSuccess(res)).catch(err => handlePromise.onError(err));
//

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then



// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

// const myName = new Promise((res, rej) => setTimeout(res, 2000, 'My surname is'))
//
// myName
//     .then(onSuccess)
//     .then(print)
//     .catch(console.log)
//
//
// function print(value: string): void {
//     console.log(value);
// }
//
// function onSuccess(value: string): string{
//     throw new Error();
//     return `${value} Vlad`;
// }
// //
// //
//
// // const promise = new Promise((res, rej) => {
// //     setTimeout(() => {
// //         const result = prompt('Insert your name');
// //         res(`My name is ${result}`);
// //     }, 2000);
// // })
// //
// // promise.then(console.log);

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

// function getPromiseData(value: Promise<{ name: string } | Error>){
//     value.then(console.log).catch(console.log);
// }
// getPromiseData(Promise.resolve({name: 'Anna'}));

// const test10 = new Promise((res, rej) => {
//     res({name: "Anna"});
// });
//
// const getPromiseData = (data: Promise<any>) => {
//     data.then(console.log);
// }


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с, {city: ''} через 4с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
//
// let prom1 = new Promise ( (res) => {
//     setTimeout( () => {
//         res({name: 'Anna'})
//     }, 2000)
// })
// let prom2 = new Promise ( (res,rej) => {
//     setTimeout( () => {
//         rej('Error')
//     }, 3000)
// })
//
// let prom3 = new Promise ( (res) => {
//     setTimeout( () => {
//         res({city: 'Minsk'})
//     }, 4000)
// })
//
// let result = Promise.all([prom1, prom2, prom3])
// result.then(([a,b,c]: Array<Object>) => ({...a,...b,...c})).then(console.log).catch(console.log)

//
// result
//     .then(res => res.reduce((acc, current) => {
//         return Object.assign(acc, current)
//     }, {}))
//     .then(console.log)




// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

// const cancelBtn = document.querySelector('#btn-cancel-promise');
//
// let reject: any;
// const promise2 = new Promise((res, rej) => {
//     reject = res;
// })
//
// cancelBtn.addEventListener('click', () => {
//     console.log('cancel button');
//     reject('Error in promise');
// });
//
//
// function createPromise(delay: number){
//     return new Promise((res, rej) => setTimeout(res, 1000 * delay, 'Promise data'));
// }
//
// Promise.race([createPromise(5),promise2])
//     .then(console.log)
//     .catch(e => console.log('In catch', e));

