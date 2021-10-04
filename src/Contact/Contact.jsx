import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
      copyText: "Click to copy the email id",
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.us-east-2.amazonaws.com/victordeb.me-files/json_data/contact.json"
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

  copyEmail = () => {
    var vr = document.getElementById("mailId");
    vr.select();
    document.execCommand("copy");
    this.setState({ copyText: "email id copied to clipboard" });
    setTimeout(() => {
      this.setState({ copyText: "Click to copy the email id" });
    }, 2000);
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
          <i class="fa fa-spinner fa-spin" /> Loading...
        </div>
      );
    } else {
      return (
        <div className="w3-row">
          <div className="w3-half">
            <div className="contentInfoContact">
              <div className="headerTextContact">Contact Me</div>
              <div className="tagLineContact">{data.tagLine}</div>
              <div className="conatctBody">
                <div className="commentBox w3-display-container animated slideInLeft">
                  <div className="heading w3-display-topleft">
                    {data.boxHeading}
                  </div>
                  <div className="comment w3-display-left">
                    {data.boxDescription}
                  </div>
                </div>
                <div className="overlapBox w3-display-container animated slideInUp">
                  <div className="w3-left">
                    <span
                      onMouseDown={this.copyEmail}
                      className="clickCopy w3-tooltip"
                    >
                      <i class="fa fa-envelope" />{" "}
                      <span
                        className={`w3-text tooltipText ${
                          this.state.copyText === "Click to copy the email id"
                            ? ""
                            : "changeBack"
                        }`}
                      >
                        {this.state.copyText}
                      </span>
                      &nbsp;{data.emailId}
                    </span>
                  </div>
                  <div className="w3-left">
                    <i class="fa fa-phone" />
                    &nbsp;{data.phoneNo}
                  </div>
                  <div className="w3-display-bottomleft socialLinks">
                    <a
                      href={data.facebookLink}
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-facebook-official" />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={data.instagramLink}
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-instagram" />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={data.githubLink}
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-github" />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href={data.linkedinLink}
                      target="_blank"
                      without
                      rel="noopener noreferrer"
                    >
                      <i class="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <input
              id="mailId"
              type="text"
              value={data.emailId}
              style={{ opacity: 0 }}
            />
          </div>
          <div className="w3-half w3-hide-small w3-hide-medium">
            <div className="w3-img sideImageContact w3-right animated slideInRight" />
          </div>
        </div>
      );
    }
  }
}

export default Contact;
