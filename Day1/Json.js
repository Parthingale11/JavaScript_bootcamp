//Json 
const myObject={
    "name":"Alice",
    "age":25,
    "isStudent":true,
    "hobbies":["reading","coding"],
    "address":{
        "city":"New York",
        "zipCode":"10001"
    }
}

console.log(`Name:${myObject.name}`);
console.log(`hobby:${myObject.hobbies[0]}`);
console.log(`zipcode:${myObject.address.zipCode}`);
