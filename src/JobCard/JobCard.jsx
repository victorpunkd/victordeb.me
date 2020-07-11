import React, { Component } from "react";
import "./JobCard.css";

export class JobCard extends Component {
  render() {
    return (
      <div className="customCard w3-row animated flipInX">
        <div className="w3-threequarter">
          <span className="w3-left jobHeading">
            {this.props.role} @{" "}
            <a
              href={this.props.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.company}
            </a>
          </span>
          <div className="w3-left timeline">{this.props.timeLine}</div>
          <div className="jobDescription">{this.props.description}</div>
        </div>
        <div className="w3-rest">
          <img alt="jobimage" src={this.props.image} className="images" />
        </div>
      </div>
    );
  }
}

export default JobCard;
