import React, {useState, useEffect} from 'react';

// Components
import JokeDisplay from '../UI-Components/JokeDisplay/JokeDisplay';
import Button from '../UI-Components/Button/Button';

// API - curly brackets for named exports
import { chuckAPI } from '../../api/chuck';

const RandomJoke = () => {

    const [joke, setJoke] = useState('');
    // const [query, setQuery] = useState(['teeth']);

    const callRandomJoke = async () => {
        await chuckAPI.get(`/jokes/random`)
        .then(res => setJoke(res.data.value.joke))
    };

    return (
        <div className="joke-container">
            <h1 className="route-heading">Random Joke</h1>
            <p className="instructions">Click the Get Joke button as many times as you want to receive hilarious Chuck Norris themed jokes!</p>
            <Button onClick={callRandomJoke} buttonText="Get Joke" />

            {joke != ''
                ?   <JokeDisplay jokeResult={joke} />   
                :   null
            }
                    
        </div>
    );

};

export default RandomJoke;