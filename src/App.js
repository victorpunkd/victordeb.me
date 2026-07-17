import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Blogs from "./Blogs/Blogs";
import Hobbies from "./Hobbies/Hobbies";
import Contact from "./Contact/Contact";
import ReactGA from "react-ga";
import AskAboutVictor from "./AskAboutVictor/AskAboutVictor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeSection: "Home",
      isAskAboutVictorClicked: false,
    };
  }

  componentDidMount() {
    this.initializeReactGA();
  }

  initializeReactGA = () => {
    ReactGA.initialize("UA-173547033-1");
    ReactGA.pageview("/");
    console.log("Google Analytics Activated");
  };

  handleContactCickedFromHome = () => {
    this.setState({
      activeSection: "Contact",
    });
  };

  handleNavOptionClick = (navItemClicked) => {
    ReactGA.pageview(`/${navItemClicked.toLowerCase()}`);
    if (navItemClicked === "AskAboutVictor") {
      this.setState({
        isAskAboutVictorClicked: true,
      });
    } else
      this.setState({
        activeSection: navItemClicked,
      });
  };

  render() {
    return (
      <div className="App">
        <AskAboutVictor
          isAskAboutVictorClicked={this.state.isAskAboutVictorClicked}
          handleAIChatBoxClose={() =>
            this.setState({ isAskAboutVictorClicked: false })
          }
        />
        <NavBar
          activeSection={this.state.activeSection}
          navOptionClicked={this.handleNavOptionClick}
        />{" "}
        {this.state.activeSection === "Home" && (
          <Home
            contactCickedFromHome={this.handleContactCickedFromHome}
            navOptionClicked={this.handleNavOptionClick}
          />
        )}
        {this.state.activeSection === "Skills" && <Skills />}
        {this.state.activeSection === "Portfolio" && <Portfolio />}
        {this.state.activeSection === "Career" && <Experience />}
        {this.state.activeSection === "Education" && <Education />}
        {this.state.activeSection === "Blogs" && <Blogs />}
        {this.state.activeSection === "Hobbies" && <Hobbies />}
        {this.state.activeSection === "Contact" && <Contact />}
      </div>
    );
  }
}

export default App;
