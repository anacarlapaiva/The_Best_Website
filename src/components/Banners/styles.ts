import styled from "styled-components";


export const Container = styled.div`
  display: flex;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  width: 100%;
  vertical-align: middle;
  height: 53rem;
  position: absolute;
`;

export const GroupBanner = styled.div`
  flex-direction: column;
  width: 40rem;
`;

export const ContentText = styled.h1`
  display: flex;
  text-align: justify;
  color: #fff;
  z-index: 999;
  top: 10rem;
  position: relative;
  left: 7rem;
  font-weight: bold;
  text-transform: uppercase;
  p {
    color: #f6a000;
  }
`;
