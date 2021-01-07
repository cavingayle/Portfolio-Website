import React from "react";
import styled from "styled-components";

const ProjectCard = ({
  projectTitle = "Project Title",
  projectDescription = "Project Description",
  projectTech = ["React", "CSS", "Express", "Node"],
  githubLink,
  liveLink,
}) => {
  const techMap = projectTech.map((tech) => <li>{tech}</li>);

  return (
    <Card>
      <CardInner>
        <CardHeader>
          <ProjectTop>
            <Folder>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-folder"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </Folder>
            <ProjectLinks>
              <a href={githubLink} rel="noreferrer" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={liveLink}
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    class=""
                  ></path>
                  <polyline points="15 3 21 3 21 9" class=""></polyline>
                  <line x1="10" y1="14" x2="21" y2="3" class=""></line>
                </svg>
              </a>
            </ProjectLinks>
          </ProjectTop>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <ProjectDescription>
            <p>{projectDescription}</p>
          </ProjectDescription>
          <Footer>
            <ProjectTechList>{techMap}</ProjectTechList>
          </Footer>
        </CardHeader>
      </CardInner>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  transition: all 0.5s ease;

  &:hover {
    transform: translate3D(0, -1px, 0) scale(1.02);
    transition: all 0.5s ease;
  }
`;

const CardInner = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.075);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const CardHeader = styled.div`
  width: 100%;
`;
const ProjectTop = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
`;

const Folder = styled.div`
  svg {
    width: 40px;
    height: 40px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  margin-top: -3px;
  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    width: 20px;
    margin-left: 3px;
    height: 20px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0px 0px 10px;
  font-size: 22px;
`;

const ProjectDescription = styled.div`
  font-size: 17px;

  p {
    margin: 0px;
    /* font-family: 'Inconsolata', monospace; */
  }
`;

const Footer = styled.div``;

const ProjectTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: none;

  li {
    font-size: 12px;
    line-height: 1.75;
    margin-right: 15px;
  }
`;
