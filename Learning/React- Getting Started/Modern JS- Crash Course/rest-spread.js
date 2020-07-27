// ... only destructures 1 item and creates an array of the remaining items.
const [first, ...restOfItems] = [10, 20, 30, 40];

console.log(first);
console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;

// for copying the array to a new array
const newArray = [...restOfItems];

// these are shallow copies
const newObject = {
    ...person
}