import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        "name": "LDG"
    }

    render() {
        return (
            <div>
                My Name is <b>{ this.props.name }</b>
            </div>
        );
    }
}

export default MyName;