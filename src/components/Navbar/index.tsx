import React, { useState } from "react";
import {
  Container,
  ListOfLinks,
  Logo,
  MobileIcon,
  Nav,
  NavItem,
  NavLinks,
} from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

import LogoNav from '../../assets/Images/logo_nav.png'

export const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container>
      <Nav>
        <Logo src={LogoNav} alt="Logo do The best açaí"/>

        <ListOfLinks open={click} onClick={handleClick}>
          <NavItem>
            <NavLinks to="/">
                Início
            </NavLinks>
            <NavLinks to="/">
                Nossa história
            </NavLinks>
            <NavLinks to="/">
                Nossas lojas
            </NavLinks>
            <NavLinks to="/">
                Trabalhe conosco
            </NavLinks>
            <NavLinks to="/">
                Clube The Best
            </NavLinks>
          </NavItem>
        </ListOfLinks>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </Nav>
    </Container>
  );
};
