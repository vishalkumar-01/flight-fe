import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 20px 0;
  // position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const SocialIcons = styled.div`
  font-size: 24px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

const FooterInfo = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>Fly Emirates</Logo>
        <SocialIcons>
          <SocialIconLink href="#" target="_blank">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>
      </FooterContent>
      <FooterInfo>
        <p>{new Date().getFullYear()} All Rights Reserved.<FaRegCopyright /></p>
        <p>123 Main Street, Oil City, USA</p>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
