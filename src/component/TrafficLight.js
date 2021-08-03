import classNames from "classnames";
import React, { Component } from "react";
import './TodoItem.css';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class TrafficLight extends Component {
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }
  constructor() {
    super();
    this.state = { colorNext: RED };
    setInterval(() => {
      this.setState({
        colorNext: this.getNextColor(this.state.colorNext),
      });
    }, 1000);
  }
  render() {
    let { colorNext } = this.state;
    return (
      <div className='TrafficLight'>
        <div
          className={classNames("bulb", "red", {
            active: colorNext === RED,
          })}
        ></div>
        <div
          className={classNames("bulb", "orange", {
            active: colorNext === ORANGE,
          })}
        ></div>
        <div
          className={classNames("bulb", "green", {
            active: colorNext === GREEN,
          })}
        ></div>
      </div>
    );
  }
}
export default TrafficLight;

