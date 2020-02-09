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
            listLoadMessage: ''
        }
    }

    appendJokeArray = async () => {
        if(this.state.getJokes) {
            await chuckAPI.get(`/jokes/random`)
            .then(res => this.setState({ jokeArray: [...this.state.jokeArray, res.data.value.joke] }))
            .catch(err => console.log(err))
        }   
        
    }

    handleGetList = () => { 
        this.setState({
            getJokes: true, 
            listLoadMessage: 'Loading...', 
            jokeInterval: setInterval(this.appendJokeArray, 1000) 
        })
    }

    stopList = () => {
        this.setState({ getJokes: false, listLoadMessage: '' })
        clearInterval(this.state.jokeInterval)
    }

    render () {

        return (
            <div className="joke-container">
                <Button
                    onClick={this.handleGetList}
                    buttonText="Get Jokes"
                />
                <JokeListContainer
                    jokes={this.state.jokeArray}
                    loadMessage={this.state.listLoadMessage}
                />
                <Button
                    onClick={this.stopList}
                    buttonText="Stop"
                />       
            </div>
        )
        
    }
};

export default JokeList;