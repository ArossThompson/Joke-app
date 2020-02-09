import React from 'react';

// Components
import JokeDisplay from '../UI-Components/JokeDisplay/JokeDisplay';
import Button from '../UI-Components/Button/Button';

// API - curly brackets for named exports
import { chuckAPI } from '../../api/chuck';

class CustomJoke extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            customFirst: '',
            customLast: '',
            customJoke: '',
            showError: false
        };
    };

    callCustomJoke = async () => {
        if(this.state.customFirst !== '' && this.state.customLast !== '') {
            this.setState({ showError: false })

            await chuckAPI.get(`/jokes/random/?firstName=${this.state.customFirst}&lastName=${this.state.customLast}`)
            .then(res => this.setState({customJoke: res.data.value.joke}))
            .catch(err => console.log(err))
        } else {
            this.setState({ showError: true, customJoke: '' })
        };
    };

    render () {

        return (
            <div className="joke-container">
                <h1 className="route-heading">Custom Joke</h1>
                <p className="instructions">Enter a First and Last name into the input fields, then press Get Joke to see your custom joke!</p>
                <div className="input-wrapper">
                    <label className='field-label'>
                        <span>First Name:</span>    
                        <input type="text" className="text-input first-input" onChange={e => this.setState({ customFirst: e.target.value })}/>
                    </label>
                    <label className='field-label'>
                        <span>Last Name: </span> 
                        <input type="text" className="text-input last-input" onChange={e => this.setState({ customLast: e.target.value })}/>
                    </label>
                </div>
                
                <Button onClick={this.callCustomJoke} buttonText="Get Joke" />
                {this.state.showError 
                    ? <p className="validation-error">Please enter a first and last name before searching for a joke!</p>
                    : null
                }
                {this.state.customJoke !== '' 
                    ?   <JokeDisplay jokeResult={this.state.customJoke} />   
                    :   null
                }   
            </div>
        );
        
    };
};

export default CustomJoke;