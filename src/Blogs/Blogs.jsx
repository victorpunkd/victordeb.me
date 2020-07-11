import React, { Component } from "react";
import "./Blogs.css";
import { BlogsCard } from "../BlogsCard/BlogsCard";

export class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.ap-south-1.amazonaws.com/victordeb.me-files/json_data/blogs.json"
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
            <div className="contentInfoBlogs">
              <div className="headerTextBlogs">Blogs</div>
              <div className="tagLinePortfolio">{data.tagLine}</div>
              <div className="blogsContent">
                {data.blogs.map(blogs => (
                  <BlogsCard
                    firstColor={blogs.firstColor}
                    secondColor={blogs.secondColor}
                    shadowTextColor={blogs.shadowTextColor}
                    title={blogs.title}
                    introText={blogs.introText}
                    logoImage={blogs.logoImage}
                    author={blogs.author}
                    date={blogs.date}
                    readTime={blogs.readTime}
                    response={blogs.response}
                    views={blogs.views}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w3-half w3-hide-small">
            <img
              src={data.sideImage}
              className="w3-img sideImageBlogs w3-right animated slideInRight"
              alt=""
            />
          </div>
        </div>
      );
    }
  }
}

export default Blogs;
