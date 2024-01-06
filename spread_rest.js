// spread operator
let arr = [1,2,3,4]
console.log(arr);
console.log(...arr);
let numbers = [1,2,3,4];
let numbers2 = [5,6,8,9];
let arrr = [numbers,numbers2];
console.log(arrr);
let arrr2 = [...numbers,...numbers2];
console.log(arrr2);
// spread operator for object
let person = {
    name: "x",
    age: 24
}
let another = {
    ...person,
    nationality: "Bangladeshi",
}
console.log(another);

// rest opetator
let something = (...num) => console.log(num);
something(1,2,3,4,5,6);






