import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        };
    }

        

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

        let currentCounterValue = prevState.counterValue;

        if (action ==='add') {
            currentCounterValue += 1;
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

    render() {

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue} /> 
            </div>
            
        ); 
    }
}

export default Counter;

