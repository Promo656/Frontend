import {CityType, student, StudentType} from "../02-obj/02obj";


export function changeSkill(student:StudentType, newSkill:string) {
student.Technologies.push(newSkill)
}
export function changeActive(student:StudentType, isActive:boolean) {
student.isActive=true
}
export function whereLive(student:StudentType,where:string) {
return(
    student.address.russia.city===where
)
}

