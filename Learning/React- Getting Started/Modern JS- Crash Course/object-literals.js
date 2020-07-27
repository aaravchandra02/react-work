/*

It is better than using 'new'
      const obj = {
        key: value
      };
*/

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const mystery = 'answer'
const obj = {
    p1: 10,
    p2: 20,
    f1() { },
    f2: () => { }, // property that holds functions
    // dynamic propoerty syntax
    [mystery]: 42, // its not array literal, JS evaluates whats within [] and make the result of that as the new property name.
    InverseOfPI, // its equivalent of InverseOfPI: InverseOfPI
};
console.log(obj.mystery); // o/p: undefined
console.log(obj.answer); // o/p: 42
console.log(obj);