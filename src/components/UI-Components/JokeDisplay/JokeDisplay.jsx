import React from 'react'; 

class JokeDisplay extends React.Component {

    constructor (props) {
        super(props)

        this.state = {}
    }
    
    render() {
        return (
            <div className="joke-display">
                <p className="joke-text">{this.props.jokeResult || null}</p>
            </div>
        )
    }

}

export default JokeDisplay;