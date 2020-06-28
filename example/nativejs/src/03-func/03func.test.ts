import {StudentType} from "../02-obj/02obj";
import {changeActive, changeSkill, whereLive} from "./03func";

let student: StudentType

beforeEach(() => {
    student = {
        name: "Egor",
        age: 26,
        isActive: false,
        address: {
            russia: {
                city: "Moscow",
                nameStreet: "Ulica"
            },
        },
        Technologies: [
            "HTML",
            "CSS",
            "JS"
        ],
    }
})

test("Change skill test", () => {
    expect(student.Technologies.length).toBe(3)
    changeSkill(student, "React")
    expect(student.Technologies.length).toBe(4)
    expect(student.Technologies[3]).toBe("React")
})

test("Student should be active", () => {
    expect(student.isActive).toBe(false)
    changeActive(student, true)
    expect(student.isActive).toBe(true)
})

test("Does student live in?", () => {
    let result1 = whereLive(student, "Moscow")
    let result2 = whereLive(student, "Sochi")
    expect(result1).toBe(true)
    expect(result2).toBe(false)
})