import React from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

// Styles
import './App.scss'

// Components
import Header from './components/Header/Header'
import JokeDisplay from './components/JokeDisplay'
import Button from './components/Button'

// API - curly brackets for named exports
import { chuckAPI } from './api/chuck';

class App extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            randomJoke: null
        }
    }


    callRandomJoke = async () => {
        await chuckAPI.get(`/jokes/random`)
        .then(res => this.setState({randomJoke: res.data.value.joke}))
        .catch(err => console.log(err))
    };

    render() {
        return  (
            <Router>
                <div className="App">
                    <Header />
                    {/* <Button
                        onClick={this.callRandomJoke}
                        buttonText="Random Joke"
                    />
                    <JokeDisplay
                        jokeResult={this.state.randomJoke}
                    />         */}
                </div>  
            </Router>       
        )
    };

};

export default App;