import React from 'react';
import styled from 'styled-components';

const Spaced = styled.div`
    margin: 7px 0;
`;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.timer,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.onEnd(this.props.index);
        }, 5000);
        setInterval(() => {
            this.setState({
                time: this.state.time - 1,
            })
        }, 1000);
    }

    render() {
        return (
            <Spaced>{this.state.time} s.</Spaced>
        )
    }
}

export default Timer;
