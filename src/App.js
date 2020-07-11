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

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeSection: "Home"
    };
  }

  handleContactCickedFromHome = () => {
    this.setState({
      activeSection: "Contact"
    });
  };

  handleNavOptionClick = navItemClicked => {
    this.setState({
      activeSection: navItemClicked
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          activeSection={this.state.activeSection}
          navOptionClicked={this.handleNavOptionClick}
        />{" "}
        {this.state.activeSection === "Home" && (
          <Home contactCickedFromHome={this.handleContactCickedFromHome} />
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
