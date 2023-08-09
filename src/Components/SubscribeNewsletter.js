import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeNewsletter() {
  const isValidEmail = () => {
    const inputEmail = document.querySelector(".ft-input").value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    notify(emailRegex.test(inputEmail));
  };

  const notify = (value) => {
    value
      ? toast.success("Subscribed to Newsletter !", {
          position: toast.POSITION.TOP_CENTER,
        })
      : toast.error("Invalid Email Address !", {
          position: toast.POSITION.TOP_CENTER,
        });
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Update to our Newsletter</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter your email address"
      />
      <button className="ft-btn" type="button" onClick={isValidEmail}>
        Subscribe
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
