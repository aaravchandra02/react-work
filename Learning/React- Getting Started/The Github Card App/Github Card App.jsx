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
            {props.profiles.map(profile => <Card {...profile} />)}
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

// Form Component for taking inputs from the user.
class Form extends React.Component {
    render() {
        return (
            <form className='input-form' action={}>
                <input type="text" placeholder="Github Username" />
                <button>Add this Card</button>
            </form>
        )
    }
}

class App extends React.Component {
    // constructor is used for tapping into states
    constructor(props) {
        super(props) // Its a JS thing which is needed to honor the link b/w App class and the class that App class extends from.
        this.state = {
            profiles: testData,// should be '[]' but as we are testing hence its initialised.
        }; // it has to be an object use useState in fn.
    }

    // its required in a class component, it return the virtual DOM decription of our component
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form />
                <CardList profiles={testData} />
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