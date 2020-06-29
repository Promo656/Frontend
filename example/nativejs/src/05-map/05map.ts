export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Dima Volkon", age: 18},
    {name: "Vova Ivanov", age: 29},
    {name: "Kirill Petrov", age: 38}
]

function reType(man: ManType) {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

let d1=reType(people[0])
let d2=reType(people[1])
let d3=reType(people[2])