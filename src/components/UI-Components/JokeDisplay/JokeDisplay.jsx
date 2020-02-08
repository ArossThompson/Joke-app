import React from 'react'; 

class JokeDisplay extends React.Component {

    constructor (props) {
        super(props)

        this.state = {}
    }
    
    render() {
        return (
            <div className="joke-container">
                <p>{this.props.jokeResult || null}</p>
            </div>
        )
    }

}

export default JokeDisplay;