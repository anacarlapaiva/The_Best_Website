import React from "react";
import { Container, Title } from "./styles";

interface IButtonProps {
  title?: string;
  onClick?: () => void;
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  title,
  onClick,
  loading,
  ...rest
}) => {
  return (
    <Container {...rest} onClick={onClick}>
      {loading ? "carregando" : <Title>{title}</Title>}
    </Container>
  );
};
