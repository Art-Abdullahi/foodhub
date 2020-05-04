import styled from "styled-components";

export const StyledGrid = styled.div`
  background: #fff;
  max-width: 1280px;
  color: blue;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 42px;
    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;

  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
