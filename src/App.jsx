import React from 'react'; 

// Styles
import './App.scss'

// Components
import JokeDisplay from './components/JokeDisplay'

class App extends React.Component {

    render() {
        return  (
            <div class="App">
                <div className="title">
                    <h1 className="appHeading">ReactJS Joke App</h1>
                </div>
                <JokeDisplay />
            </div>
        )
    }

};

export default App;