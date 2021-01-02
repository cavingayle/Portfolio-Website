import logo from "./logo.svg";
import styled from "styled-components";
import AnimationWord from "./components/AnimationWord";
import Type from "./components/Type";

function App() {
  return (
    <MainContainer>
      <Header>
        <StyledNav>
          <Logo>CG.</Logo>
          <MenuContainer>
            <Menu>
              <MenuItems>Home</MenuItems>
              <MenuItems>About</MenuItems>
              <MenuItems>Projects</MenuItems>
            </Menu>
          </MenuContainer>
        </StyledNav>
        <SideMenu></SideMenu>
      </Header>
      <Container>
        <Firstline>Hi,</Firstline>
        <h1>I'm Cavin A Gayle Jr.</h1>
        <BottomText>
           <Type />{" "}
        </BottomText>
        <div></div>
      </Container>
      <Arrow>
        <img
          width="40"
          height="40"
          alt=""
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
        />
      </Arrow>
    </MainContainer>
  );
}

export default App;
const Arrow = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  font-weight: 700;
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
    color: #000;
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
  color: #000;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 45px;
  margin: 0;
  opacity: 1;
  transform: translate(0, 0);
  margin-left: -8px;
`;
