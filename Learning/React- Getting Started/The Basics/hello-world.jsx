
import ReactDOM from 'react-dom'

//components = functions; component names have to be with Capital letter
function Hello() {
    return <div><p>Hello React!</p> <p>Aarav is my name.</p></div>;
}

// DOM renderer - entry point
ReactDOM.render(
    <Hello />,
    document.getElementById('#frst-para'),
);

function Button() {
    return <button> Test </button>
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode')

)


// interactivity comes using hooks. aka 'state'
function Button() {
    const [counter, setCounter] = useState(0); //counter is getter, while setCounter is setter 
    return <button onClick={() => console.log(Math.random())}> {counter}</button>
}

// It is a button that increases count by 1 when clicked; ps: it starts with 0 as the digit.
function Button() {
    const [counter, setCounter] = useState(0); //counter is getter, while setCounter is setter 
    return <button onClick={() => setCounter(counter + 1)}> {counter}</button>
}

// It is a button that doubles itself when clicked; ps: it starts with 5 as the digit.
// this is not readable
function Button() {
    const [counter, setCounter] = useState(5); //counter is getter, while setCounter is setter 
    return <button onClick={() => setCounter(counter * 2)}> {counter}</button>
}

// A more readable version of the above function.
function Button() {
    const [counter, setCounter] = useState(5); //counter is getter, while setCounter is setter, useState() is called hook. 
    const handleClick = () => setCounter(counter * 2);
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

// multple component rendering is done like this:
function Button() {
    const [counter, setCounter] = useState(5); //counter is getter, while setCounter is setter, useState() is called hook. 
    const handleClick = () => setCounter(counter * 2);
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

function Display() {
    return (
        <div>....</div>
    );
}

ReactDOM.render(
    [<Button />, <Display />], // Not ideal but it is a good way when all the compnonents to be rendered are coming from the same component in a dynamic way. 

    // making them children of another element. Supported by React API
    <div>
        <Button />
        <Display />
    </div>,

    // if we dont want to add the <div> then <> or <React.Fragment>:
    <React.Fragment>
        <Button />
        <Display />
    </React.Fragment>,
    document.getElementById('mountNode')
)

// making a parent component makes it more ideal:
function Button() {
    const [counter, setCounter] = useState(5); //counter is getter, while setCounter is setter, useState() is called hook. 
    const handleClick = () => setCounter(counter * 2);
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

function Display() {
    return (
        <div>....</div>
    );
}

function App() {
    return (
        <div>
            <Button />
            <Display />
        </div>
    );
}

ReactDOM.render(
    [<Button />, <Display />], // Not ideal but it is a good way when all the compnonents to be rendered are coming from the same component in a dynamic way. 

    // making them children of another element. Supported by React API
    <div>
        <Button />
        <Display />
    </div>,

    // if we dont want to add the <div> then <> or <React.Fragment>:
    <React.Fragment>
        <Button />
        <Display />
    </React.Fragment>,
    document.getElementById('mountNode')
)

/* A state like the 'counter' value can be accessed by that component itself and no one else.
So make parent components have 'state' and pass 'props' for data communication 
It follows - Responsibility Isolation
*/

function Button(props) {
    return (
        <button onClick={props.onClickIncrement}>
            +1
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(120);
    const increment_counter = () => setCounter(counter + 1);
    return (
        <div>
            <Button onClickIncrement={increment_counter} />
            <Display message={counter} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode')
)

// Component Reusability
function Button(props) {
    return (
        <button onClick={() => props.onClickFunction(props.increment)}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (i_v) => setCounter(counter + i_v);
    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);

// More readble code

function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment)
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (i_v) => setCounter(counter + i_v);
    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);