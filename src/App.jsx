import React from 'react'; 
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

// Styles
import './App.scss'

// Components
import Header from './components/Header/Header';
import RandomJoke from './components/routes/RandomJoke';
import CustomJoke from './components/routes/CustomJoke';
import JokeList from './components/routes/JokeList';


class App extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            randomJoke: null
        }
    };

    render() {
        return  (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path='/' component={RandomJoke} />
                    <Route path='/Random-joke' component={RandomJoke} />
                    <Route path='/custom-joke' component={CustomJoke} />
                    <Route path='/joke-list' component={JokeList} />
                </div>  
            </Router>       
        )
    };

};

export default App;