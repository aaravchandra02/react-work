//class component

//what component ot create?
// card
// list of cards

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/85" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    // constructor

    // its required in a class component, it return the virtual dom decription of our component
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

// function component
// const App = ({ title }) => (
//     <div className="header">{title}</div>
// );

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
);