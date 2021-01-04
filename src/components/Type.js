import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Photographer",
          "Anime Lover",
          "Storyteller",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;