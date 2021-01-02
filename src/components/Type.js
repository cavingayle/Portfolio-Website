import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Designer",
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