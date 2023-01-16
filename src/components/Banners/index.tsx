import React from "react";
import { Container, ContentText, GroupBanner, Img } from "./styles";

interface IBannerProps {
  img: string;
  alt: string;
  text?: boolean;
}

export const BannerHome: React.FC<IBannerProps> = ({ img, alt, text }) => {
  const TextBanner = " baixe nosso app e garanta seu açaí hoje mesmo!";

  return (
    <Container>
      <GroupBanner>
        <Img src={img} alt={alt} />

        {text === true ? <ContentText>{TextBanner}</ContentText> : null}
      </GroupBanner>
    </Container>
  );
};
