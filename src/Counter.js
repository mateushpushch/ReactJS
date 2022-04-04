import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1,
        };
    }

    changeStepValue = (changeValue) => {
        console.log('działa');
        console.log(changeValue);
        this.setState({ stepValue: parseFloat(changeValue) })
    }

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

        let currentCounterValue = prevState.counterValue;

        if (action ==='add') {
            currentCounterValue += this.state.stepValue;
        } else if (action === 'reinit') {
            currentCounterValue = prevProps.initValue;
        } else {
            currentCounterValue = 0;
        }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    }

    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue} /> 
                {clockElement}
                <Step stepMethod={this.changeStepValue} />
            </div>
            
        ); 
    }
}

export default Counter;

