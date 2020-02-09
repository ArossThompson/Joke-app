import React from 'react'; 

class JokeListContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {}
    }
    
    render() {
        const listItems = this.props.jokes.map(item => {
            return <li>{item}</li>
        });

        return (
            <div className="list-container">
                <ul>
                    {listItems}
                    {this.props.loadMessage}
                </ul>
            </div>
        )
    }

}

export default JokeListContainer;