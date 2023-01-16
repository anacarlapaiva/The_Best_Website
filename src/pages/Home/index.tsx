import React from "react";
import { BannerHome } from "../../components/Banners";
import { Navbar } from "../../components/Navbar";

import BannerImg from "../../assets/Images/banner_home.png";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerHome
        img={BannerImg}
        alt="Banner da página principal. Na foto, mão em desenho segurando um copo de açaí"
      />
    </div>
  );
};
