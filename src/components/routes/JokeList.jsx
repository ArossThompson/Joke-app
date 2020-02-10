import React from 'react';

// Components
import Button from '../UI-Components/Button/Button';
import JokeListContainer from '../UI-Components/JokeListContainer/JokeListContainer'

// API - curly brackets for named exports
import { chuckAPI } from '../../api/chuck';

class JokeList extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            getJokes: false,
            jokeArray: [],
            listLoadMessage: '',
            listStopped: null,
            jokeInterval: null
        };
    };

    componentWillUnmount () {
        // Ensure interval timer isn't active on other Routes
        clearInterval(this.state.jokeInterval)
    };

    appendJokeArray = async () => {
        if(this.state.getJokes) {
            await chuckAPI.get(`/jokes/random`)
            .then(res => this.setState({ jokeArray: [...this.state.jokeArray, res.data.value.joke] }))
            .catch(err => console.log(err))
        };  
        
    };

    handleGetList = () => {
        // Clear interval before setting it in state, to prevent interval stacking on get jokes button
        clearInterval(this.state.jokeInterval)
        this.setState({
            getJokes: true, 
            listLoadMessage: 'Loading...',
            listStopped: false,
            jokeInterval: setInterval(this.appendJokeArray, 1500) 
        });
    };

    stopList = () => {
        this.setState({ getJokes: false, listLoadMessage: '', listStopped: true })
        clearInterval(this.state.jokeInterval)
    };

    clearList = () => {
        // Re-initialise jokeArray to an empty array on clearList
        this.setState({ jokeArray: [] })
    };

    render () {

        return (
            <div className="joke-container">
                <h1 className="route-heading">Joke List</h1>
                <p className="instructions">Press the get jokes button to load an endless scrollable list of hilarious Chuck Norris jokes!</p>

                <Button onClick={this.handleGetList} buttonText="Get Jokes" />
                <JokeListContainer jokes={this.state.jokeArray} loadMessage={this.state.listLoadMessage} /> 
                {this.state.listLoadMessage !== ''
                    ? <Button onClick={this.stopList} buttonText="Stop" />
                    :   null
                }
                {this.state.listStopped && this.state.jokeArray.length > 0
                    ? <Button onClick={this.clearList} buttonText="Clear" />
                    : null
                }       
            </div>
        );
        
    };
};

export default JokeList;