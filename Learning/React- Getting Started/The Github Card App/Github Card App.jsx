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
            key = added as reordering in future may cause issues.
            */}
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
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
    //  WHen using simple 'ref' 
    //     // Inorder to use 'ref' of React. ref is React's fancy ID.
    //     userNameinput = React.createRef();

    //     handleSubmit = (e) => {
    //         e.preventDefault(); // done to prevent submit behaviour as we are using submit event as the trigger.
    //         console.log(
    //             this.userNameinput.current.value // ref object.currentvalue(its the html inout element itself).value
    //         )
    //     };
    //     render() {
    //         return (
    //             <form onSubmit={this.handleSubmit}>
    //                 <input
    //                     type="text"
    //                     placeholder="Github Username"
    //                     ref={this.userNameinput}
    //                     required
    //                 />
    //                 <button >Add this Card</button>
    //             </form>
    //         )
    //     }
    // }

    // Ideally use it to provide user with UI feedback like password etc. Through React rather than reading DOM element.
    state = { username: '' }; // created state object and an element to handle input value.
    handleSubmit = async (e) => {
        e.preventDefault(); // done to prevent submit behaviour as we are using submit event as the trigger.
        const response = await axios.get(`https://www.api.github.com/users/${this.state.userName}`); // used to make API call instead of fetch().
        console.log(
            this.state.userName
        );
        console.log(response);
        console.log(response.data);
        // as new fn is available (onSubmit), therefore:
        this.props.onSubmit(response.data);
        this.setState({ username: '' })// reset the input field.
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.username} // creates a controlled element and cant type in the field.
                    onChange={e => this.setState({ username: e.target.value })}//it enables DOM to tell react that something is shcnaged and thus it should reflect changes.
                    placeholder="Github Username"
                    required
                />
                <button >Add this Card</button>
            </form>
        )
    }
}
// child component cannot change state of parent but parent can pass properties(fn component) which can be changed by the child.


class App extends React.Component {
    // constructor is used for tapping into states
    // constructor(props) {
    //     super(props) // Its a JS thing which is needed to honor the link b/w App class and the class that App class extends from.
    //     this.state = {
    //         profiles: testData,// should be '[]' but as we are testing hence its initialised.
    //     }; // it has to be an object use useState in fn.
    // }

    // shorter syntax for the above constructor thing using babel
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        console.log('App', profileData)
        /*
        Append the newly returned data to the list. setState changes the React state and it takes a arg or fn.
        Then
        */
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData], // equivalent to cancatenation
        }));
    };
    // its required in a class component, it return the virtual DOM decription of our component
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                {/* Invoked when form is submitted */}
                <Form onSubmit={this.addNewProfile} />
                {/* <CardList profiles={testData} /> */}
                <CardList profiles={this.state.profiles} />
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