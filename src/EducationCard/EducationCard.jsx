import React, { Component } from "react";
import "./EducationCard.css";

export class EducationCard extends Component {
  render() {
    return (
      <div className="w3-half educationCard animated fadeIn">
        <div className="w3-card educationContent">
          <img
            alt="educationimage"
            src={this.props.image}
            className="educationPicture"
          />
          <div className="educationDegree">{this.props.degree}</div>
          <div className="educationCollege">{this.props.college}</div>
          <div className="w3-justify educationDescription">
            {this.props.description}{" "}
          </div>
          <a
            href={this.props.certificate}
            target="_blank"
            className="buttonConvo"
            rel="noopener noreferrer"
          >
            See Convocation
          </a>
        </div>
      </div>
    );
  }
}

export default EducationCard;
