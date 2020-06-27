type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType1
    Technologies: Array<string>
}
type AddressType1 = {
    russia: RussiaType
}
type RussiaType = {
    city: string
    nameStreet: string
}

const student: StudentType = {
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
export type StreetType = {
    title:string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type GovernmentBuildingsType={
    type:string
    budget:number
    staffCount:number
    address:Array<AddressType>
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}

