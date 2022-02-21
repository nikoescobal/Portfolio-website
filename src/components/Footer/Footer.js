import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { GrSoundcloud, GrTwitter } from "react-icons/gr";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem
            target='_blank'
            rel='noopener noreferrer'
            href='mobile:+1-415-805-6767'
          >
            +1-415-805-6767
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:hey@nikoescobal.com'
          >
            hey@nikoescobal.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>
          If you have an application you're interested in developing, a feature
          that needs building, or a project that needs coding, feel free to hit
          me up! Always happy to chat and explore opportunities!
        </Slogan>
      </CompanyContainer>
      <SocialIconsContainer>
        <SocialIcons
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/nikolas-escobal/'
        >
          <AiFillLinkedin size='3rem'></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons
          target='_blank'
          rel='noopener noreferrer'
          href='https://nikoescobal.medium.com/'
        >
          <AiFillMediumCircle size='3rem'></AiFillMediumCircle>
        </SocialIcons>
        <SocialIcons
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/nikoescobal'
        >
          <GrTwitter size='3rem'></GrTwitter>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
