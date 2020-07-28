//class component

//what component ot create?
// card
// list of cards
// for styling either use global styling using CSS or use JS styling as shown below.



const testData = [
    {
        "name": "Aarav Chandra",
        "avatar_url": "https://avatars3.githubusercontent.com/u/42168454?v=4",
        "location": "United States"
    },
    {
        "name": "Fabien Potencier",
        "avatar_url": "https://avatars3.githubusercontent.com/u/47313?v=4",
        "location": "Lille, France",
    },
    {
        "name": "Michele Bertoli",
        "avatar_url": "https://avatars2.githubusercontent.com/u/1308971?v=4",
        "location": "London, England",
    }
]



// class Card extends React.Component {
//     render() {
//         return (
//             <div className="github-profile">
//                 <img src="https://placehold.it/85" />
//                 <div className="info">
//                     <div className="name">Name here...</div>
//                     <div className="company">Company here...</div>
//                 </div>
//             </div>
//         );
//     }
// }

const CardList = (props) => {
    return (
        <div>
            {/* 'map' is a JS fn which takes Fn as an argument and 
            applies it to every element of the array to return one 
            array to another array sing this fn to convert evry value.
            profile element is gained from map which is then expanded and then passed.
            Its converted into :
            [<Card />,<Card />,<Card />]
            which is ultimately:
            [React.createElement(),React.createElement(),React.createElement()]
            */}
            {testData.map(profile => <Card {...profile} />)}
        </div>
    );

};

class Card extends React.Component {
    render() {
        // profile is a local variable
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="location">{profile.location}</div>
                </div>
            </div>
        );
    }
}

// Form Component for taking inputs from the 

class App extends React.Component {
    // constructor

    // its required in a class component, it return the virtual DOM decription of our component
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <CardList />
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