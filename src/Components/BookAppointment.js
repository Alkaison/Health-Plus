import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Health</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Best Professional Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Emergency Care
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Support Live Chat
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Enrollment Easy and Quick
        </p>

        <button type="button" className="ba-appointment-btn">
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
