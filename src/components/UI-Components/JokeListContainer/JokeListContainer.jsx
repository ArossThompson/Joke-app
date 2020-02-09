import React from 'react'; 
import { animateScroll } from 'react-scroll';

class JokeListContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate () {
        this.scrollToBottom();
    }

    scrollToBottom () {
        animateScroll.scrollToBottom({
            containerId: "joke-list"
        });
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
                <ul id="joke-list" className="joke-list-scroller">
                    {listItems}
                    {this.props.loadMessage}
                </ul>
            </div>
        )
    }

}

export default JokeListContainer;