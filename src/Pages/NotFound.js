import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The requested URL {deployedURL} was not found on this server.</p>
      <p>The requested URL {location.pathname} was not found on this server.</p>
    </div>
  );
}

export default NotFound;
