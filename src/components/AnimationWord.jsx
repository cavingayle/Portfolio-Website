import React from "react";
import styled from "styled-components";

const AnimationWord = () => {
  return (
    <Animation>
      <p>
        <span></span>
      </p>
    </Animation>
  );
};

export default AnimationWord;

const Animation = styled.div`
  min-width: 200px;
  margin-right: -75px;

  display: inline-block;
  p span::before {
    content: "";
    color: #aa3939;
    animation: profile 5s infinite;
  }
  @keyframes profile {
    100% {
      content: "designer";
    }
    75% {
      content: "photographer";
    }
    50% {
      content: "storyteller";
    }
    0% {
      content: "anime lover";
    }
  }
 p {
    border: 0 solid #e2e8f0;
    box-sizing: border-box;
    color: #000;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 45px;
    margin: 0;
    opacity: 1;
    transform: translate(0, 0);
 }
  
`;
