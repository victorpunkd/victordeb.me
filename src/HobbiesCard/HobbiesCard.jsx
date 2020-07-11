import React, { Component } from "react";
import "./HobbiesCard.css";

export class HobbiesCard extends Component {
  handleClick = () => {
    window.open(this.props.link, "_blank");
  };
  render() {
    return (
      <div>
        <img src={this.props.image} className="image" alt="" />
        <div className="hobby">{this.props.hobby}</div>
        <div className="description">{this.props.description}</div>
        <button onClick={this.handleClick} className="buttonHobbie">
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export default HobbiesCard;
