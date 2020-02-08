import React from 'react'; 

class TextInput extends React.Component {

    constructor (props) {
        super(props)

        this.state = {}
    }
    
    render() {
        return (
            <input className="text-input" type="text"/>
        )
    }

}

export default TextInput;