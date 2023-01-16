import React from "react";
import { BannerHome } from "../../components/Banners";
import { Navbar } from "../../components/Navbar";

import BannerImg from "../../assets/Images/banner_home.png";
import {
  ButtonLocation,
  ContentAbout,
  ContentInput,
  FindStoreContent,
  FindStoreSubtitle,
  FindStoreTitle,
  InputFind,
  Title,
} from "./styles";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerHome
        img={BannerImg}
        alt="Banner da página principal. Na foto, mão em desenho segurando um copo de açaí"
        text={true}
      />

      <FindStoreContent>
        <FindStoreTitle>
          Encontre e descubra o <b>The Best Açaí</b> mais perto de você!
        </FindStoreTitle>
        <FindStoreSubtitle>
          Lembre-se de permitir acesso à sua localização
        </FindStoreSubtitle>

        <ContentInput>
          <InputFind placeholder="Digite aqui" />
          <ButtonLocation>Minha localização</ButtonLocation>
        </ContentInput>

        <ContentAbout>
          <Title>A maior rede de self-service de açaí do MUNDO!</Title>
        </ContentAbout>
      </FindStoreContent>
    </div>
  );
};
