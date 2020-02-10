import React from 'react';

// Components
import JokeDisplay from '../UI-Components/JokeDisplay/JokeDisplay';
import Button from '../UI-Components/Button/Button';

// API - curly brackets for named exports
import { chuckAPI } from '../../api/chuck';

class RandomJoke extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            randomJoke: ''
        };
    };

    callRandomJoke = async () => {
        await chuckAPI.get(`/jokes/random`)
        .then(res => this.setState({randomJoke: res.data.value.joke}))
        .catch(err => console.log(err))
    };

    render () {

        return (
            <div className="joke-container">
                <h1 className="route-heading">Random Joke</h1>
                <p className="instructions">Click the Get Joke button as many times as you want to receive hilarious Chuck Norris themed jokes!</p>
                <Button onClick={this.callRandomJoke} buttonText="Get Joke" />

                {this.state.randomJoke !== ''
                    ?   <JokeDisplay jokeResult={this.state.randomJoke} />   
                    :   null
                }
                     
            </div>
        );
        
    };
};

export default RandomJoke;