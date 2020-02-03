import React from 'react';


class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: props.initialValue,
            changeBy: props.changeBy
        }
    }

    render() {
        return (
            <div>

                <h1> {this.state.value}</h1>
                <button onClick={() => {
                    this.setState({
                        value: this.state.value + this.state.changeBy
                    });
                }}>+</button>

                <button onClick={() => {
                    this.setState({
                        value: this.state.value - this.state.changeBy
                    });
                }}>-</button>
                <button onClick={() => {
                    this.setState({
                        value: this.props.initialValue
                    });
                }}>*</button>
            </div>

        );
    }
}


export default Counter;