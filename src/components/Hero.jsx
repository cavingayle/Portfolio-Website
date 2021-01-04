import React from "react";
import styled from "styled-components";
import Type from "./Type";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <MainContainer>
      <Header>
        <StyledNav>
          <Logo>CG.</Logo>
          <MenuContainer>
            <Menu>
              <MenuItems>
                <Link to="about" spy={true} smooth={true}>
                  About
                </Link>
              </MenuItems>
              <MenuItems>
                <Link to="projects" spy={true} smooth={true}>
                  Projects
                </Link>
              </MenuItems>
            </Menu>
          </MenuContainer>
        </StyledNav>
        <SideMenu></SideMenu>
      </Header>
      <Container>
        <Firstline>Hi,</Firstline>
        <h1>I'm Cavin Gayle</h1>
        <BottomText>
          <Type />{" "}
        </BottomText>
        <div></div>
      </Container>
      <Arrow>
        <OutsideArrow>
          <InsideArrow></InsideArrow>
        </OutsideArrow>
      </Arrow>
    </MainContainer>
  );
};

export default Hero;
const OutsideArrow = styled.div``;
const InsideArrow = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid #929292;
  border-width: 2px 2px 0 0;
  transform: rotate(135deg);
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  font-weight: 700;
  color: #808080;

  animation: bounce 3s 3s;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

const MenuItems = styled.li`
  display: block;
  padding: 0.5rem 1.25rem;
  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
`;
const MenuContainer = styled.div``;

const Logo = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;

const SideMenu = styled.div``;

const StyledNav = styled.div`
  grid-template-columns: auto 1fr;
  display: grid;
  align-items: center;
`;

const Header = styled.div`
  position: absolute;
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  top: 0;
  padding-top: 0;
`;

const MainContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;

  width: 100%;

  h1 {
    /* color: #000; */
    font-size: 2.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    opacity: 1;
    padding: 0;
    transform: translate(0, 0);
    font-weight: 700px;
    line-height: 54px;

    @media (min-width: 768px) {
      font-size: 3rem;
      line-height: 72px;
    }

    @media (min-width: 1280px) {
      font-size: 4rem;
      line-height: 96px;
    }
  }

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  min-height: 100%;
`;

const BottomText = styled.div`
  align-self: flex-end;

  border: 0 solid #e2e8f0;
  box-sizing: border-box;
  color: #aa3939;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 45px;
  margin: 0;
  opacity: 1;
  transform: translate(0, 0);
  min-width: 250px;
  margin-right: -95px;

  @media (max-width: 600px) {
    font-size: 1.6rem;

    span {
      font-size: 1.6rem;
    }
  }
`;

const Firstline = styled.p`
  border: 0 solid #e2e8f0;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 45px;
  margin: 0;
  opacity: 1;
  transform: translate(0, 0);
  margin-left: -8px;
`;
