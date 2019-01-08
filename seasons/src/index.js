import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // 'constructor' not required by React, specific function particular to JavaScript language.
    // in JavaScript class, the 'constructor' function is automatically and instantly called before anything else when a new instance of the class is created (eg. 'App' component)
    constructor(props) {  
        super(props);   //inherit parent's constructor function (from React.Component)

        this.state = { lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
                this.setState({ lat:position.coords.latitude });
            },
            (err) => {
                // console.log(err);
                this.setState({errorMessage: err.message});
            }
        );
    }

    // React requires us to define render()
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);