import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Back End Developer",
          "Software Engineer",
          "Machine Learning",
          "Deep Learning",
          "Computer Vision",
          "Mechanical Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
