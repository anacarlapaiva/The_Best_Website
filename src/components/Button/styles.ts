import styled from "styled-components";

interface IButtonProps {
  primary?: boolean;
  big?: boolean;
  border?: boolean;
}

export const Container = styled.button<IButtonProps>`
  border-radius: 5px;
  background-color: ${({ primary }) => (primary ? "#F6A000" : "transparent")};
  white-space: nowrap;
  padding: 35px 145px;
  width: 100%;
  height: ${({ big }) => (big ? "95px" : "75px")};
  border: ${({ border }) => (border ? "1px solid #F6A000" : "none")};
  cursor: pointer;

  &:hover {
    transition: translate 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#0467fb" : "#4b5987")};
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 32px;
`;
