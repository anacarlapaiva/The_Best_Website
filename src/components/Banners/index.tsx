import React from "react";
import { Container, ContentText, Img } from "./styles";

interface IBannerProps {
  img: string;
  alt: string
  text?: string;
}

export const BannerHome: React.FC<IBannerProps> = ({img, alt, text}) => {
  return (
    <Container>
      <Img src={img} alt={alt}/>

      <ContentText>
        {text}
      </ContentText>
    </Container>
  );
};
