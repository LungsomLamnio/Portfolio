import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "MERN STACK"], // The words to be typed
      typeSpeed: 150, // Slower typing speed (increase the value for slower typing)
      backSpeed: 50, // Speed of erasing
      backDelay: 1000, // Delay before erasing starts
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the typing effect
      showCursor: true, // Show typing cursor
    };

    const typed = new Typed("#element", options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span
        id="element"
        style={{
          fontSize: "50px", // Increase text size
          color: "#ffb703", // Text color
          fontWeight: "bold", // Bold text
          letterSpacing: "3px", // Increase letter spacing
        }}
      ></span>
      <style>
        {`
          /* Target the cursor class to match the text color and increase its size */
          .typed-cursor {
            font-size: 50px !important; /* Ensure cursor size matches text size */
            color: #ffb703 !important; /* Set cursor color to match text color */
          }
        `}
      </style>
    </div>
  );
};

export default TypingEffect;
