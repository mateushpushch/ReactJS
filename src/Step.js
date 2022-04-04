import React, {Component} from "react";
import './Step.css';

const Step = (props) => {
    return (
        <div>
            <p>Krok</p>
            <input type="number" onChange={(event) => {
                props.stepMethod(event.target.value);
            }}/>
        </div>
    )
}

export default Step;