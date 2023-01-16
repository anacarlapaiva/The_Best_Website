import styled from "styled-components";

export const FindStoreContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.125rem 16.25rem;
  flex-direction: column;
  width: 100%;
`;

export const FindStoreTitle = styled.h2`
  font-size: 2.8rem;
`;

export const FindStoreSubtitle = styled.p`
  font-size: 2rem;
  margin: 2rem 0;
`;

export const ContentInput = styled.div`
  display: flex;
  width: 83%;
  height: 4.5rem;
  justify-content: space-between;
`;

export const InputFind = styled.input`
  border: 1px solid #f8aa00;
  width: 67%;
  height: 100%;
  padding: 0 40px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  font-size: 1.5rem;

  &::placeholder {
    color: #000;
    opacity: 30%;
    font-size: 1.5rem;
  }
`;

export const ButtonLocation = styled.button`
  width: 30%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  border: 1px solid #f8aa00;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1.6rem;
  color: #f8aa00;
  cursor: pointer;

  &:hover{
    color: #000;
    transition: 0.3s ease-out;
  }
`;

export const ContentAbout = styled.div`
    width: 100%;
    padding-top: 9rem;
`;
export const About = styled.div`
   display: flex;
`;
export const Title = styled.h1`

`;
