import React, { Component } from "react";
import "./BlogsCard.css";

export class BlogsCard extends Component {
  render() {
    return (
      <div
        className="blogsCard animated fadeInDown"
        style={{
          backgroundImage: `linear-gradient(to right, ${
            this.props.firstColor
          }, ${this.props.secondColor})`,
          boxShadow: `0px 30px 10px -20px ${this.props.shadowTextColor}`
        }}
      >
        <div className="w3-left blogPrimaryText">{this.props.title}</div>
        <div className="w3-right optionIcons">
          <i class="fa fa-bookmark" />
          {"  "} <i class="fa fa-ellipsis-h" />
        </div>
        <div
          className="blogSecondaryText"
          style={{ color: this.props.shadowTextColor }}
        >
          <span className="w3-left">{this.props.introText}</span>
        </div>

        <div className="blogFooter">
          <div className="w3-row">
            <img
              src={this.props.logoImage}
              alt=""
              className="w3-quarter blogImage"
            />{" "}
            <div className="w3-half">
              <div
                className="w3-left-align"
                style={{ marginLeft: window.innerWidth < 510 ? "0%" : "5%" }}
              >
                <div className="blogPrimaryText">{this.props.author}</div>
                <div
                  className="blogSecondaryText"
                  style={{ color: this.props.shadowTextColor }}
                >
                  <span>
                    {this.props.date} <i class="fa fa-eye" />{" "}
                    {this.props.readTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="w3-res w3-hide-small w3-hide-medium">
              <div className="w3-right">
                {/* <div className="w3-xlarge">&nbsp; </div> */}
                <div
                  className="blogSecondaryText"
                  style={{
                    marginTop: "21%",
                    color: this.props.shadowTextColor
                  }}
                >
                  <span>
                    {this.props.response} | {this.props.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogsCard;
