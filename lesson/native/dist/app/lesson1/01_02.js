export var addMoneyToBudget = function (buildings, type, moneyCount) {
    for (var i = 0; i < buildings.length; i++) {
        if (buildings[i].type === type) {
            buildings[i].budget += moneyCount;
        }
    }
};
export var demolishHousesOnTheStreet = function (city, streetName) {
    city.houses = city.houses.filter(function (house) {
        return house.address.street.title !== streetName;
    });
};
export var repairHouse = function (house) {
    house.repaired = true;
};
export var toFireStaff = function (building, staffCount) {
    building.staffCount -= staffCount;
};
export var toHireStaff = function (building, staffCount) {
    building.staffCount += staffCount;
};
export var getStreetsTitlesOfGovernmentsBuildings = function (buildings) {
    var arrayIfTitles = [];
    for (var i = 0; i < buildings.length; i++) {
        arrayIfTitles.push(buildings[i].address.street.title);
    }
    return arrayIfTitles;
};
export var getStreetsTitlesOfHouses = function (houses) {
    return houses.map(function (house) {
        return house.address.street.title;
    });
};
export function getHousesOnTheStreet(houses, streetName) {
    return houses.filter(function (h) {
        return h.address.street.title === streetName;
    });
}
export function getBuildingsWithStaffCountGreaterThen(buildings, staffCount) {
    return buildings.filter(function (b) {
        return b.staffCount > staffCount;
    });
}
//# sourceMappingURL=01_02.js.map