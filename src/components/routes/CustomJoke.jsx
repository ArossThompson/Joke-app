import React from 'react';

// Components
import JokeDisplay from '../UI-Components/JokeDisplay/JokeDisplay';
import Button from '../UI-Components/Button/Button';
import TextInput from '../UI-Components/TextInput/TextInput'

// API - curly brackets for named exports
import { chuckAPI } from '../../api/chuck';

class CustomJoke extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            customFirst: null,
            customLast: null,
            customJoke: null,
            showError: false
        }
    }

    callCustomJoke = async () => {
        if(this.state.customFirst != null && this.state.customLast != null) {
            this.setState({ showError: false })

            await chuckAPI.get(`/jokes/random/?firstName=${this.state.customFirst}&lastName=${this.state.customLast}`)
            .then(res => this.setState({customJoke: res.data.value.joke}))
            .catch(err => console.log(err))
        } else {
            this.setState({ showError: true })
        }
    };

    render () {

        return (
            <div className="joke-container">
                <label className='field-label'>
                    First Name: 
                    <input type="text" className="text-input" onChange={e => this.setState({ customFirst: e.target.value })}/>
                </label>
                <label className='field-label'>
                    Last Name: 
                    <input type="text" className="text-input" onChange={e => this.setState({ customLast: e.target.value })}/>
                </label>
                <Button
                    onClick={this.callCustomJoke}
                    buttonText="Get Joke"
                />
                {this.state.showError 
                    ? <p className="validation-error">Please enter a first and last name before searching for a joke</p>
                    : null
                }
                <JokeDisplay
                    jokeResult={this.state.customJoke}
                />        
            </div>
        )
        
    }
};

export default CustomJoke;