import {CityType} from "./02obj";
import {budgeCost, reduceStaff, repairHouse} from "../03-func/03func";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [{
            types:"Hospital",
            budget:200000,
            staffCount:200,
            address:{
                street:{
                    title:"Central Str"
                }
            }
        }],
        citizenNumber: 100000
    }
})

test.skip("city test", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White street")

    expect(city.houses.length).toBe(3)
    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses.length).toBe(3)
    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy street")
})

test.skip("Government test", () => {
    expect(city.governmentBuildings.length).toBe(1)

    expect(city.governmentBuildings[0].types).toBe("Hospital")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str")

    expect(city.governmentBuildings[1].types).toBe("Fire-Station")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str")
})

test.skip("Budget change",()=>{
    budgeCost(city,-100000)
expect(city.governmentBuildings[0].budget).toBe(100000)
})

test.skip("Repair house",()=>{
    repairHouse(city)
    expect(city.houses[0].repaired).toBe(true)
})

test("Reduce staff", ()=>{
    reduceStaff(city, 50)
    expect(city.governmentBuildings[0].staffCount).toBe(150)
})