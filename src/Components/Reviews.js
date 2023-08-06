import React from "react";
import ReviewPic from "../Assets/reviews.png";
import "../Styles/Reviews.css";

function Reviews() {
  return (
    <div className="review-section">
      <div className="rw-image-content">
        <img src={ReviewPic} alt="Doctor Group" className="rw-image1" />
      </div>

      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">"</span>
          <span className="rw-review">
            Health Plus transformed my healthcare experience! The online
            consultations were so convenient, and the doctors were knowledgeable
            and caring.
          </span>
          <span className="rw-text-quote2">"</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">Esther Howard</p>
            <p className="rw-reviewer-place">Texas, USA</p>
          </div>

          <div className="rw-btns">
            <button className="rw-next-btn">←</button>
            <button className="rw-next-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
