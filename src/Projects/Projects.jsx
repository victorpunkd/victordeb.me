import React, { Component } from "react";
import "./Projects.css";

export class Projects extends Component {
  render() {
    return (
      <div key={this.props.projectID} className="projectsSection ">
        <img
          alt="projectScreenShot"
          src={this.props.imageSource}
          className="projectImage w3-animate-left"
        />
        <div className="w3-animate-right">
          <div
            className="projectName w3-left-align"
            style={{ color: this.props.projectColor }}
          >
            {this.props.projectName}{" "}
            <span>
              <a
                href={this.props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github iconProject" />
              </a>{" "}
              <a
                href={this.props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-external-link iconProject" />
              </a>
            </span>
          </div>
          <div className="projectDescription">
            {this.props.projectDescription}{" "}
          </div>
          <div className="projectTechStack w3-left-align">
            {this.props.techStack.map(stack => (
              <img alt="techUsed" src={stack.logoPath} className="techImages" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
