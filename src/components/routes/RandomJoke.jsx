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
            randomJoke: null
        }
    }

    callRandomJoke = async () => {
        await chuckAPI.get(`/jokes/random`)
        .then(res => this.setState({randomJoke: res.data.value.joke}))
        .catch(err => console.log(err))
    };

    render () {

        return (
            <div className="joke-container">
                <Button
                    onClick={this.callRandomJoke}
                    buttonText="Random Joke"
                />
                <JokeDisplay
                    jokeResult={this.state.randomJoke}
                />        
            </div>
        )
        
    }
};

export default RandomJoke;