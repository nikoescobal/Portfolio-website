import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { GrSoundcloud, GrTwitter } from "react-icons/gr";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <DiCssdeck size='3rem'></DiCssdeck> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/nikoescobal'>
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nikolas-escobal/'>
        <AiFillLinkedin size='3rem'></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href='https://soundcloud.com/nikoesco'>
        <GrSoundcloud size='3rem'></GrSoundcloud>
      </SocialIcons>
      <SocialIcons href='https://soundcloud.com/nikoesco'>
        <GrTwitter size='3rem'></GrTwitter>
      </SocialIcons>
      <SocialIcons href='https://nikoescobal.medium.com/'>
        <AiFillMediumCircle size='3rem'></AiFillMediumCircle>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
