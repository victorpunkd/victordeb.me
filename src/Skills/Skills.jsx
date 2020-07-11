import React, { Component } from "react";
import Techstack from "../Techstack/Techstack";
import "./Skills.css";
import { Line } from "react-chartjs-2";

export class Skills extends Component {
  constructor() {
    super();
    this.state = {
      imageDisplay: "none",
      data: [],
      isLoaded: false
    };
  }

  showImage = () => {
    this.setState({ imageDisplay: "block" });
  };

  componentDidMount() {
    fetch(
      "https://s3.ap-south-1.amazonaws.com/victordeb.me-files/json_data/skills.json"
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
    setTimeout(this.showImage, 1000);
  }

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
            <div className="contentInfoSkills">
              <div className="verticalMiddleSkills">
                <span className="headerText">Tech Stack</span>
                <div className="tagLine">{data.tagLine}</div>
                <div className="techStack">
                  {data.skills.map(skills => (
                    <Techstack
                      key={skills.id}
                      image={skills.image}
                      firstColor={skills.firstColor}
                      secondColor={skills.secondColor}
                      percentage={skills.percentage}
                    />
                  ))}
                </div>
                <div className="techChart">
                  <Line
                    data={{
                      labels: data.labels,
                      datasets: data.lineData
                    }}
                    options={{ maintainAspectRatio: true }}
                    height={window.innerWidth < 520 ? "220vh" : "120vh"}
                  />
                </div>
                <span className="w3-text-gray">Tech usage timeline</span>
              </div>
            </div>
          </div>
          <div className="w3-half w3-hide-small w3-hide-medium">
            <div
              className="w3-right sideBackgroundImageSkills animated slideInRight"
              style={{ display: this.state.imageDisplay }}
            />
          </div>
        </div>
      );
    }
  }
}

export default Skills;
