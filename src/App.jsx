import React from 'react'; 

// Styles
import './App.scss'

// Components
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


    _callRandomJoke = async () => {
        await chuckAPI.get(`/jokes/random`)
        .then(res => this.setState({randomJoke: res.data.value.joke}))
    };

    // 

    // onSearchSubmit = async (term) =>  {
    //     if(term.split(" ").length > 1) {
    //       await owm.get(`?q=${term.split(" ")[0]},${term.split(" ")[1]}&units=metric&APPID=${this.state.API_key}`).then(res => this.setState({weather:res.data, base_data:res, resStatus: ''}))
    //       .catch(err => err ? this.setState({resStatus:"unsuccessful", base: '', weather: ''}) : null)
    //     } else {
    //       await owm.get(`?q=${term}&units=metric&APPID=${this.state.API_key}`).then(res => this.setState({weather:res.data, base_data:res, resStatus: ''}))
    //       .catch(err => err ? this.setState({resStatus:"unsuccessful", base: '', weather: ''}) : null)
    //     }
    
    //     console.log(this.state.weather);
    //   }

    render() {
        return  (
            <div className="App">
                <div className="title">
                    <h1 className="appHeading">ReactJS Joke App</h1>
                </div>
                <Button
                    onClick={this._callRandomJoke}
                    buttonText="Random Joke"
                />
                <JokeDisplay
                    jokeResult={this.state.randomJoke}
                />        
            </div>         
        )
    };

};

export default App;