import React, { Component } from "react";
import "./Techstack.css";

export class Techstack extends Component {
  constructor() {
    super();
    this.state = { barWidth: "0%" };
  }

  changeWidth = () => {
    this.setState({ barWidth: this.props.percentage });
  };

  componentDidMount() {
    setTimeout(this.changeWidth, 500);
  }
  render() {
    return (
      <div className="w3-row main">
        {/* <img
          alt="tech-stack-image"
          className="logo w3-quarter"
          src={this.props.image}
        /> */}
        <i class={this.props.icon} style={{ fontSize: "28px" }}></i>

        <div className="w3-rest progressBarParent">
          <div
            className="progressBarChild  w3-card"
            style={{
              width: this.state.barWidth,
              backgroundImage: `linear-gradient(to right, ${this.props.firstColor}, ${this.props.secondColor})`,
            }}
          >
            {this.state.barWidth}
          </div>
        </div>
      </div>
    );
  }
}

export default Techstack;
