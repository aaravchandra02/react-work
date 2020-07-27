// a promise is an object that might deliver data later in a program.
// Example of async function is 'fetch' but it get complicated with nesting. 

// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };

// modern way suing async/await
const fetchData = async () => {
    const resp = await fetch('https://api.github.com');
    const data = await resp.json();
    console.log(data);
};

fetchData();
