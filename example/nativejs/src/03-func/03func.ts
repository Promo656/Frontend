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

export function budgeCost(city:CityType,cost:number) {
city.governmentBuildings[0].budget+=cost
}

export function repairHouse(city:CityType) {
 city.houses[0].repaired=true
}

export function reduceStaff(city:CityType,count:number) {
city.governmentBuildings[0].staffCount-=count
}