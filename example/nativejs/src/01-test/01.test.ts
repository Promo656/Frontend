import {mult, sum} from './01'

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test.skip('sum should be corret', function () {
//action
    let result1 = sum(a, b)
    let result2 = sum(b, c)

//expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test.skip('multyply should be corret', function () {
//action
    let result1 = mult(a, b)
    let result2 = mult(b, c)

//expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})