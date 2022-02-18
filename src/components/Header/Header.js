import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { GrSoundcloud, GrTwitter } from "react-icons/gr";
import { GiCurlyWing } from "react-icons/gi";

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
          <GiCurlyWing size='3rem'></GiCurlyWing> <Span> o</Span>
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
      <SocialIcons
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/nikoescobal'
      >
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
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
        href='https://soundcloud.com/nikoesco'
      >
        <GrSoundcloud size='3rem'></GrSoundcloud>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
