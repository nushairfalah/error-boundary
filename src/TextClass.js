import React from "react";

class TextClass extends React.Component {
    render() {
        return <p style={{ color: 'yellow' }}>This is {this.props.textclass}</p>
    }
}

export default TextClass