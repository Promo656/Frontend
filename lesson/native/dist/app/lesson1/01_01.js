var user1 = {
    name: "Dimych",
    age: 33,
    isMarried: true,
    address: {
        streetName: "Nezalejnasci 21",
        city: {
            title: "Minsk",
            countryName: "Belarus"
        }
    },
    hobbies: [
        { title: "Dev", level: 10 },
        { title: "Music", level: 3 }
    ],
    children: [
        {
            name: "Misha",
            age: 3,
            isMarried: false,
            address: {
                streetName: "Nezalejnasci 21",
                city: {
                    title: "Minsk",
                    countryName: "Belarus"
                }
            },
            hobbies: [
                { title: "Games", level: 10 }
            ],
            children: []
        }
    ]
};
console.log(user1.address.city.countryName);
console.log(user1.children[0].hobbies[0].title);
export function sum(a, b) {
    return a + b;
}
export function renameStreetIfUserLives(user, oldStreet, newStreet) {
    if (user.address.streetName === oldStreet) {
        user.address.streetName = newStreet;
    }
}
export var value01_01 = "01_01";
//# sourceMappingURL=01_01.js.map