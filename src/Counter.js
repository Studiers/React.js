import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    handleIncreaseNumber = () => {
        const { number } = this.state;
        this.setState({
            "number": this.state.number + 1
        })
    }

    handleDecreaseNumber = () => {
        // this.state.number -= 1; 이 방식으로 작성하면 변수에 영향은 미치지만 실시간으로 재 렌더링 되지는 않는다.
        const { number } = this.state;
        this.setState({
            "number": number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value: {this.state.number}</div>
                <button onClick={this.handleIncreaseNumber}>+</button>
                <button onClick={this.handleDecreaseNumber}>-</button>
            </div>
        )
    }
}

export default Counter;