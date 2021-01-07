import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

const GridProjectLayout = () => {
  const cardMap = projectData.map((proj) => <ProjectCard {...proj} />);
  return (
    <GridWrapper id="projects">
      <h2>Projects</h2>
      <Grid>{cardMap}</Grid>
    </GridWrapper>
  );
};

export default GridProjectLayout;

const GridWrapper = styled.div`
  padding: 100px 0;
  margin-bottom: 1.5rem;
  /* background: #f2f2f2; */
  h2 {
    font-size: 2.5rem;
    margin: 0 0 1.5em 0;
    text-align: center;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  margin-top: 50px;
  width: 75%;
  margin: 0 auto;
  max-width: 1024px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
