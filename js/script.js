let name1 = prompt('1-shaxsning ismini kiriting')
let age1 = +prompt('1-shaxsning yoshini kiriting')
let name2 = prompt('2-shaxsning ismini kiriting')
let age2 = +prompt('2-shaxsning yoshini kiriting')

let user1 = {
    name: name1,
    age: age1
}

let user2 = {
    name: name2,
    age: age2
}

if(user1.age == user2.age){
    console.log('Ularning yoshi teng')
}
else if(user1.age > user2.age){
    console.log(`${user1.name}ning yoshi ${user2.name}ning yoshidan katta`)
}
else{
    console.log(`${user2.name}ning yoshi ${user1.name}ning yoshidan katta`)
}