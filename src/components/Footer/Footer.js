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
          <LinkItem href='mobile:+1-415-805-6767'>+1-415-805-6767</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:niko@nikoescobal.com'>
            niko@nikoescobal.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            If you have an application you're interested in developing, a
            feature that needs building, or a project that needs coding, look no
            further - I'm your guy!
          </Slogan>
        </CompanyContainer>
        <SocialIcons href='https://www.linkedin.com/in/nikolas-escobal/'>
          <AiFillLinkedin size='3rem'></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href='https://nikoescobal.medium.com/'>
          <AiFillMediumCircle size='3rem'></AiFillMediumCircle>
        </SocialIcons>
        <SocialIcons href='https://twitter.com/nikoescobal'>
          <GrTwitter size='3rem'></GrTwitter>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
