export type StudentType = {
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

export const student: StudentType = {
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
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}


export type GovernmentBuildingsType = {
    types: string
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}

export function budgeCost(city: CityType, cost: number) {
    city.governmentBuildings[0].budget += cost
}

export function repairHouse(city: CityType) {
    city.houses[0].repaired = true
}

export function reduceStaff(city: CityType, count: number) {
    city.governmentBuildings[0].staffCount -= count
}

export function destroyBuildings(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function buildingsFilter(buildings: CityType, count: number) {
    buildings.governmentBuildings=buildings.governmentBuildings.filter(b=>b.staffCount>count)
}
