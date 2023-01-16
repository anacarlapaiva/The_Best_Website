import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/Images/Logo.svg";

interface IMobileProps {
  open: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
`;

export const Nav = styled.nav`
  background: #000;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 0 263px;
`;

export const Logo = styled.div`
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  width: 10rem;
  background-image: url(${LogoImage});
`;

export const ListOfLinks = styled.ul<IMobileProps>`
  display: flex;
  align-items: flex-end;
  list-style: none;
  text-align: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ open }) => (open ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin-left: 40px;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 960px) {
    align-items: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #000;
      transition: all 0.3 ease;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
