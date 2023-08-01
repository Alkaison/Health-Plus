import React from "react";
import Doctor from "../Assets/doctor-group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />
        
        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

function SolutionStep(props) {
  return (
    <div className="about-text-step">
      <p className="about-text-sTitle">
        <span>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {props.title}
        </span>
      </p>
      <p className="about-text-description">{props.description}</p>
    </div>
  );
}

export default About;
