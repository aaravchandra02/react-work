const PI = Math.PI;
const SQRT2 = Math.SQRT2;
const E = Math.E;

const { PI, E, SQRT2 } = Math;
/* above command destructures its 3 properties from its right hand object and into the current scope.
It is useful when we want to extract few properties from a bigger object */

// Somewhere in a React App
// const {Component, Fragment, useState} = require('react');
// useState();

// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
                                    // below makes its default and then optional
// const circleArea = ({radius}, {precision = 2} = {}) =>
//   (PI * radius * radius).toFixed(precision);

// console.log(
//   circleArea(circle, { precision: 5 })
// );


// below skips destructuring the 3rd item.
// const [first, second,, forth] = [10, 20, 30, 40];

// const [value, setValue] = useState(initialValue);