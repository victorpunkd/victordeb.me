import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.ap-south-1.amazonaws.com/victordeb.me-staticfiles/json_data/Home.json"
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

  render() {
    const { data, isLoaded, error } = this.state;
    if (error) {
      return (
        <div className="w3-xxlarge w3-text-gray w3-center">
          <i class="fa fa-exclamation-circle w3-text-red" aria-hidden="true" />{" "}
          Something went wrong please refresh the page
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div
          className="w3-xxlarge w3-text-gray w3-center"
          style={{ marginTop: "10%" }}
        >
          <i className="fa fa-spinner fa-spin" /> Loading...
        </div>
      );
    } else {
      return (
        <div className="w3-row">
          <div className="w3-half contentInfo animated fadeInDown">
            <div className="verticalCenter">
              <div className="myName">Victor Deb</div>
              <div className="myProfession">{data.myProfession}</div>
              <div className="myIntro">
                <span>{data.myIntro}</span>
              </div>
              <button
                className="buttonContact"
                onClick={this.props.contactCickedFromHome}
              >
                Contact Me
              </button>
              <div />
              <a
                href={data.resumeLink}
                className="downloadResume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my resume{" "}
                <i className="fa fa-download" aria-hidden="true" />
              </a>
              <div className="socialIconsDiv">
                <span>
                  <a
                    className="socialIcon"
                    href={data.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" />
                  </a>{" "}
                  <a
                    className="socialIcon"
                    href={data.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook-square" />
                  </a>{" "}
                  <a
                    className="socialIcon"
                    href={data.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" />
                  </a>{" "}
                  <a
                    className="socialIcon"
                    href={data.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="w3-half  animated slideInRight w3-hide-small w3-hide-medium">
            <div className="sideBackgroundImage w3-right" />
          </div>
        </div>
      );
    }
  }
}

export default Home;
