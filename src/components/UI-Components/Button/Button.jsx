import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    };

    render () {
        return (
            <button aria-label={`Click this button to ${this.props.buttonText}`} className="button" onClick={this.props.onClick}>{this.props.buttonText}</button>
        )
    };
};

export default Button