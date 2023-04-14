import React, { useState, useEffect } from "react";

export default () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShowing(true), 2000);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "lightgrey",
        padding: "1rem",
      }}
    >
      {isShowing && "kjshdfkshdkfjskdjkfjsf"}
      <h2>Remote 1: Content</h2>
      <p>
        This is the content from remote 1, which will include an image component
        exposed by remote2. This demonstrates nested federated modules being
        rendered server-side.
      </p>
    </div>
  );
};
