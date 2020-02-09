import React from 'react'; 

class JokeListContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {}
    }
    
    render() {
        const listItems = this.props.jokes.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <hr/>
                    <li className="joke-list-item">{item}</li>
                </React.Fragment>
            )
        });

        return (
            <div className="list-container">
                <ul className="joke-list-scroller">
                    {listItems}
                </ul>
            </div>
        )
    }

}

export default JokeListContainer;