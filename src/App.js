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

  handleScrollToSection = (deltaY, currentPage) => {
    if (deltaY > 50) {
      switch (currentPage) {
        case "Home":
          this.setState({ activeSection: "Skills" });
          break;
        case "Skills":
          this.setState({ activeSection: "Career" });
          break;
        case "Portfolio":
          this.setState({ activeSection: "Career" });
          break;
        case "Career":
          this.setState({ activeSection: "Education" });
          break;
        case "Education":
          this.setState({ activeSection: "Hobbies" });
          break;
        case "Blogs":
          this.setState({ activeSection: "Hobbies" });
          break;
        case "Hobbies":
          this.setState({ activeSection: "Contact" });
          break;
        default:
          break;
      }
    }
    if (deltaY < -50) {
      switch (currentPage) {
        case "Contact":
          this.setState({ activeSection: "Hobbies" });
          break;
        case "Hobbies":
          this.setState({ activeSection: "Education" });
          break;
        case "Blogs":
          this.setState({ activeSection: "Education" });
          break;
        case "Education":
          this.setState({ activeSection: "Career" });
          break;
        case "Career":
          this.setState({ activeSection: "Skills" });
          break;
        case "Portfolio":
          this.setState({ activeSection: "Skills" });
          break;
        case "Skills":
          this.setState({ activeSection: "Home" });
          break;
        default:
          break;
      }
    }
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
          isAskAboutVictorClicked={this.state.isAskAboutVictorClicked}
        />{" "}
        {this.state.activeSection === "Home" && (
          <Home
            contactCickedFromHome={this.handleContactCickedFromHome}
            navOptionClicked={this.handleNavOptionClick}
            handleScrollToSection={this.handleScrollToSection}
          />
        )}
        {this.state.activeSection === "Skills" && (
          <Skills handleScrollToSection={this.handleScrollToSection} />
        )}
        {this.state.activeSection === "Portfolio" && (
          <Portfolio handleScrollToSection={this.handleScrollToSection} />
        )}
        {this.state.activeSection === "Career" && (
          <Experience handleScrollToSection={this.handleScrollToSection} />
        )}
        {this.state.activeSection === "Education" && (
          <Education handleScrollToSection={this.handleScrollToSection} />
        )}
        {this.state.activeSection === "Blogs" && (
          <Blogs handleScrollToSection={this.handleScrollToSection} />
        )}
        {this.state.activeSection === "Hobbies" && (
          <Hobbies handleScrollToSection={this.handleScrollToSection} />
        )}
        {this.state.activeSection === "Contact" && (
          <Contact handleScrollToSection={this.handleScrollToSection} />
        )}
      </div>
    );
  }
}

export default App;
