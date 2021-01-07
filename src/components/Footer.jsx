import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Header>
        <StyledNav>
          <Logo>Made By Cavin Gayle</Logo>
          <MenuContainer>
            <Menu>
              <MenuItems>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/cavingayle"
                  aria-label="Linkedin"
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
                    class="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </MenuItems>
              <MenuItems>
                <a
                  target="_blank"
                  href="https://twitter.com/cavin_gayle"
                  aria-label="Twitter"
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
                    class="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </MenuItems>
              <MenuItems>
                <a href="https://github.com/cavingayle" target="_blank" aria-label="GitHub">
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
              </MenuItems>
            </Menu>
          </MenuContainer>
        </StyledNav>
        <SideMenu></SideMenu>
      </Header>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  /* background: #f2f2f2; */
  padding: 1.5rem;
  position: relative;
  margin: 0 auto;
  font-family: "Inconsolata", monospace;
  font-size: 0.9rem;

  width: 100%;
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
  font-weight: 400;
  /* font-size: 1.125rem; */
  position: relative;
  margin-top: 1rem;
  svg {
    height: 20px;
    width: 20px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const MenuContainer = styled.div``;

const Logo = styled.span`
  font-weight: 400;
`;

const SideMenu = styled.div``;

const StyledNav = styled.div`
  grid-template-columns: auto 1fr;
  display: grid;
  align-items: center;
`;

const Header = styled.div`
  /* position: absolute; */
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  top: 0;
  padding-top: 0;
  margin: 0 auto;
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
