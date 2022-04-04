import React, {Component} from "react";
import './Clock.css'

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {date: new Date()};
        console.log(`Initialization lifeCycle: constructor(props)`);
    }

    componentDidMount() {
        console.log(`Mounting lifeCycle: componentDidMount()`);
    }

    componentDidUpdate() {
        console.log(`Updation lifeCycle: componentDidUpdate()`);
    }

    componentWillUnmount() {
        console.log(`Unmounting lifeCycle: componentDidWillUnmount()`);
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div className="clock">
                <h4>Time: {this.state.date.toLocaleTimeString()} <span onClick={this.props.toggleClockMethod}>X</span></h4>
            </div>
        );
    }
}

export default Clock;
