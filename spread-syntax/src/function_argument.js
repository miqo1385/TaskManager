function sum(x,y,z){
    return(
    sum1 = x+y+z
    )

}
const numbers = [1,2,3]
console.log(sum(...numbers))



const array1 = [1,2,3];
const array2 = [4,5,6];
mergedArray = [...array1,...array2];
console.log(mergedArray)


const colors = ["red", "green", "blue"];
const extendedColors = ["yellow",...colors, "purple"]
console.log(extendedColors)

const person = { name: 'John', age: 30 };
const newPerson = { ...person, name: 'Jane', gender: 'female' };
console.log(person);
console.log(newPerson);


const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const combinedObject = { ...object1, ...object2 };
console.log(combinedObject);