/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import MaltLogo from 'images/malt.png';
import RBLogo from 'images/rb-logo.png';
import {
  StyledLayout,
  CenterDiv,
  Content,
  Links,
  ResponsiveImg,
  RBLogoImage,
  RBLogoWrapper,
} from './styles';
// Ant Design is pre installed , use included components for faster delivery

export default function HomePage() {
  return (
    <StyledLayout>
      <CenterDiv>
        <Content>
          <ResponsiveImg src={MaltLogo} />
          <Links>
            <a href="http://stratpoint.com/">Documentation</a>
            <a href="http://stratpoint.com/">GitLab</a>
            <a href="http://stratpoint.com/">Tutorials</a>
            <a href="http://stratpoint.com/">Get Started</a>
            <a href="http://stratpoint.com/">Lezgo!</a>
          </Links>
          <RBLogoWrapper>
            <p>powered by:</p>
            <RBLogoImage src={RBLogo} />
          </RBLogoWrapper>
        </Content>
      </CenterDiv>
    </StyledLayout>
  );
}
