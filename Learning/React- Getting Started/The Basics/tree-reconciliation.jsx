/* Here react only regenerates in its DOM node the <pre> tag as it has inmemory comparision 
and only re-renders the necessary elements unlike normal DOM. This is possible because of React's virtual DOM.*/

document.getElementById('mountNode').innerHTML = `
	<div>
    Hello HTML
    <input>
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
`;

ReactDOM.render(
    React.createElement(
        'div',
        null,
        'Hello React',
        React.createElement(input, null),
        React.createElement(pre, null, (new Date).toLocaleTimeString())
    ),
    document.getElementById('mountNode2'),
);

setInterval(fn, 1000);
