import React, { Component } from "react";
import JobCard from "../JobCard/JobCard";
import "./Experience.css";

export class Experience extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.us-east-2.amazonaws.com/victordeb.me-files/json_data/experience.json"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            data: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
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
          <i class="fa fa-spinner fa-spin" /> Loading...
        </div>
      );
    } else {
      return (
        <div class="w3-row">
          <div className="w3-half">
            <div className="contentInfoExp">
              <div className="verticalMiddleExperience">
                <div className="headerTextExp">Work Experience</div>
                <div className="tagLineExp">{data.tagLine}</div>
                <div className="jobCards">
                  {data.jobs.map((jobs) => (
                    <JobCard
                      image={jobs.image}
                      role={jobs.designation}
                      company={jobs.companyName}
                      companyWebsite={jobs.companyWebsite}
                      timeLine={jobs.timeLine}
                      description={jobs.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="w3-half w3-hide-small w3-hide-medium">
            <div className="w3-img w3-right sideImageExp animated slideInRight" />
          </div>
        </div>
      );
    }
  }
}

export default Experience;
