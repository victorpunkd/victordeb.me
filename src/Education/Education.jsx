import React, { Component } from "react";
import "./Education.css";
import { EducationCard } from "../EducationCard/EducationCard";

export class Education extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.ap-south-1.amazonaws.com/victordeb.me-staticfiles/json_data/education.json"
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
        <div className="w3-row">
          <div className="w3-half">
            <div className="contentInfoEdu">
              <div
                className={`${
                  window.innerWidth < 520 ? "" : "verticalMiddleEducation"
                } `}
              >
                <div className="headerTextEdu">Education</div>
                <div className="tagLineEdu">{data.tagLine}</div>
                <div className="w3-row">
                  {data.education.map((education) => (
                    <EducationCard
                      image={education.image}
                      degree={education.degree}
                      college={education.college}
                      description={education.description}
                      certificate={education.certificateImage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w3-half w3-hide-small w3-hide-medium">
            <div className="w3-img sideImageEdu w3-right animated slideInRight" />
          </div>
        </div>
      );
    }
  }
}

export default Education;
