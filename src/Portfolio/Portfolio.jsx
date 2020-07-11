import React, { Component } from "react";
import { Projects } from "../Projects/Projects";
import "./Portfolio.css";

export class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      currentProject: 0,
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.ap-south-1.amazonaws.com/victordeb.me-files/json_data/portfolio.json"
    )
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            data: data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  goPrevious = () => {
    if (this.state.currentProject !== 0)
      this.setState({ currentProject: this.state.currentProject - 1 });
  };

  goForward = () => {
    console.log(this.state.data);
    if (this.state.currentProject < this.state.data.projects.length - 1)
      this.setState({ currentProject: this.state.currentProject + 1 });
  };

  render() {
    const { data, isLoaded, error } = this.state;
    if (error) {
      return (
        <div className="w3-xxlarge w3-text-gray w3-center">
          Something went wrong please refresh the page
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="w3-xxlarge w3-text-gray w3-center">
          <i className="fa fa-spinner fa-spin" /> Loading...
        </div>
      );
    } else {
      return (
        <div className="w3-row">
          <div className="w3-half">
            <div className="contentInfoFolio">
              <div className="verticalMiddlePortfolio">
                <div className="headerTextPortfolio">Portfolio</div>
                <div className="tagLinePortfolio">{data.tagLine}</div>
                <Projects
                  className="w3-rest"
                  projectID={data.projects[this.state.currentProject].id}
                  imageSource={
                    data.projects[this.state.currentProject].displayPicture
                  }
                  projectColor={
                    data.projects[this.state.currentProject].projectColor
                  }
                  projectName={
                    data.projects[this.state.currentProject].projectName
                  }
                  projectDescription={
                    data.projects[this.state.currentProject].projectDescription
                  }
                  projectLink={
                    data.projects[this.state.currentProject].projectLink
                  }
                  githubLink={
                    data.projects[this.state.currentProject].githubLink
                  }
                  techStack={data.projects[this.state.currentProject].techStack}
                />
                <div style={{ marginTop: 10 }}>
                  <button
                    className={`navButton ${
                      this.state.currentProject !== 0 ? "" : "disableNavButton"
                    }`}
                    onClick={this.goPrevious}
                  >
                    <i className="fa fa-angle-left" /> Previous
                  </button>{" "}
                  <button
                    className={`navButton ${
                      this.state.currentProject < data.projects.length - 1
                        ? ""
                        : "disableNavButton"
                    }`}
                    onClick={this.goForward}
                  >
                    Next <i className="fa fa-angle-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w3-half w3-hide-small">
            <div className="w3-right sideImagePortfolio animated slideInRight" />
          </div>
        </div>
      );
    }
  }
}

export default Portfolio;
