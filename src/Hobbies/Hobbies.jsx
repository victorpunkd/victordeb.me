import React, { Component } from "react";
import "./Hobbies.css";
import { HobbiesCard } from "../HobbiesCard/HobbiesCard";

export class Hobbies extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.ap-south-1.amazonaws.com/victordeb.me-staticfiles/json_data/hobby.json"
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
            <div className="contentInfoHobby">
              <div
                className={`${
                  window.innerWidth < 520 ? "" : "verticalMiddleHobbies"
                }`}
              >
                <div className="headerTextHobby">My Hobbies</div>
                <div className="tagLineHobby">{data.tagLine}</div>
                <div className="contentBody w3-row">
                  {data.hobbies.map((hobby) => (
                    <div className="w3-third cardHolder animated zoomIn w3-center">
                      <HobbiesCard
                        image={hobby.image}
                        hobby={hobby.hobby}
                        description={hobby.description}
                        buttonText={hobby.buttonText}
                        link={hobby.link}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w3-half w3-hide-small w3-hide-medium">
            <div className="w3-img sideImageHobby w3-right animated slideInRight" />
          </div>
        </div>
      );
    }
  }
}

export default Hobbies;
