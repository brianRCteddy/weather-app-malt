import styled from 'styled-components';

export const StyledLayout = styled.div`
  height: 100vh;
  background: #000000;
  color: #636b6f;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  margin: 0;
`;

export const CenterDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  flex-direction: column;
`;

export const Links = styled.div`
  & > a {
    color: #ffffff;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const ResponsiveImg = styled.img`
  max-width: 55%;
  height: auto;
  margin-bottom: 30px;
`;

export const RBLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  p {
    margin-right: 1.25em;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const RBLogoImage = styled.img`
  max-width: 25%;
  height: auto;
`;
