import React, { Component } from "react";
import "./NavBar.css";
import icon from "./icon.png";

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hideSmallMenuBar: true,
      sideBarIdentifierVisible: true,
    };
  }

  menuClick = () => {
    this.setState({ hideSmallMenuBar: false });
    if (this.state.sideBarIdentifierVisible)
      this.setState({
        sideBarIdentifierVisible: !this.state.sideBarIdentifierVisible,
      });
  };

  closeNavbar = () => {
    this.setState({ hideSmallMenuBar: true });
  };

  handleNavOptionClick = (navItemClicked) => {
    this.props.navOptionClicked(navItemClicked);
    this.setState({ hideSmallMenuBar: true });
  };

  render() {
    return (
      <>
        <div className="w3-bar w3-top w3-large w3-hide-large mobileHeader glow">
          <button
            className="w3-bar-item w3-button w3-hover-none w3-hover-text-black hamburgerButton item"
            onClick={this.menuClick}
          >
            <i className="w3-xlarge fa fa-bars " />
          </button>
          <div>
            <img
              alt="logo"
              src="https://victordeb.s3.eu-north-1.amazonaws.com/images/askAI.png"
              className="icon item"
              onClick={() => this.handleNavOptionClick("AskAboutVictor")}
            />
          </div>
          {/* <span
            className={`w3-large sideBarIdentifier ${
              this.state.sideBarIdentifierVisible ? "" : "w3-hide"
            }`}
          >
            <i className="fa fa-arrow-left"></i> Here is the sidebar
          </span> */}
        </div>
        <nav
          className={`w3-sidebar w3-bar-block navBar w3-xlarge animated slideInLeft w3-card w3-top w3-center w3-container  ${
            this.state.hideSmallMenuBar ? "w3-hide-small w3-hide-medium" : ""
          }`}
        >
          <img alt="logo" src={icon} className="icon" />
          <div className="navBarItems">
            <span
              onClick={this.closeNavbar}
              className="w3-hide-large w3-bar-item crossIconButton"
              style={{ marginTop: -10 }}
            >
              <i className="fa fa-times menuIcon" aria-hidden="true" />
            </span>
            <div
              id="home"
              onClick={() => this.handleNavOptionClick("Home")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Home" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-home menuIcon" />
              </div>
              <span className="menuName">Home</span>
            </div>
            <div
              id="skills"
              onClick={() => this.handleNavOptionClick("Skills")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Skills" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-cog menuIcon" />
              </div>
              <span className="menuName">Techs</span>
            </div>
            {/* <div
              id="portfolio"
              onClick={() => this.props.navOptionClicked("Portfolio")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Portfolio" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-folder-open menuIcon" />
              </div>
              <span
                className="menuName"
                style={{ marginLeft: "calc(-6px - 0.2vw)" }}
              >
                Portfolio
              </span>
            </div> */}
            <div
              id="career"
              onClick={() => this.handleNavOptionClick("Career")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Career" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-industry menuIcon" />
              </div>
              <span className="menuName">Experience</span>
            </div>
            <div
              id="education"
              onClick={() => this.handleNavOptionClick("Education")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Education" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-graduation-cap menuIcon" />
              </div>
              <span className="menuName">Education</span>
            </div>
            {/*<div
              id="blogs"
             onClick={() => this.props.navOptionClicked("Blogs")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Blogs" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-newspaper-o menuIcon" aria-hidden="true" />
              </div>
              <span className="menuName">Blogs</span>
            </span>*/}
            <div
              id="hobby"
              onClick={() => this.handleNavOptionClick("Hobbies")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Hobbies" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-music menuIcon" aria-hidden="true" />
              </div>
              <span className="menuName">Hobbies</span>
            </div>
            <div
              id="contact"
              onClick={() => this.handleNavOptionClick("Contact")}
              className={`w3-bar-item menuItem ${
                this.props.activeSection === "Contact" ? "active" : ""
              }`}
            >
              <div>
                <i className="fa fa-phone menuIcon" aria-hidden="true" />
              </div>
              <span className="menuName">Contact</span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
