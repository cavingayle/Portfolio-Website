import React from "react";
import styled from "styled-components";
import img from '../images/cartooncavin.png'

const About = () => {
  return (
    <MainContainer id="about">
      <Container>
        <h2>About Me</h2>

        <ImageContainer>
          <img src={img} alt=""/>
        </ImageContainer>
        <TextContainer>
          <p>
            I'm a Web Developer focused on crafting great digital
            experiences. I’ve always been someone who has enjoyed
            bringing ideas to life regardless of the medium. For me code is
            another tool to do just that. When I'm not programming you
            can find me improving my reading speed, learning spanish or watching
            anime.
          </p>
        </TextContainer>
      </Container>
    </MainContainer>
  );
};

export default About;

const MainContainer = styled.div`
  padding: 75px 0;
  text-align: center;
  background: #f2f2f2;
`;
const Container = styled.div`
  max-width: 1024px;
  width: 75%;
  margin: 0 auto;
  h2 {
    font-size: 2.5rem;
    margin: 0 0 1.5rem 0;
  }
`;
const TextContainer = styled.div`
  p {
    font-family: "Inconsolata", monospace;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 2rem;
  img {
    display: inline;
    height: 200px;
    width: 200px;
  }
`;
