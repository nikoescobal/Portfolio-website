import React from "react";
import {
  DiJavascript1,
  DiSass,
  DiReact,
  DiRubyRough,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRubyonrails,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGithub,
  SiRedux,
  SiPostcss,
  SiWebpack,
  SiBabel,
  SiJest,
  SiGraphql,
  SiHeroku,
  SiNetlify,
  SiGatsby,
  SiNextdotjs,
  SiSqlite,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  LogoContainer,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import TechnologiesFrontEndLogos from "./TechnologiesFrontEndLogos";

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <LogoContainer>
          <DiReact size='3rem'></DiReact>
        </LogoContainer>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <LogoContainer>
            <TechnologiesFrontEndLogos />
          </LogoContainer>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRubyonrails size='3rem'></SiRubyonrails>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>Experience with React.js and Tailwind</ListParagraph>
      </ListItem>
      <ListItem>
        <DiVisualstudio size='3rem'></DiVisualstudio>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            {" "}
            <a href='#'>
              <img
                alt='PostgreSQL'
                src='https://img.shields.io/badge/PostgreSQL-316192.svg?logo=postgresql&logoColor=white'
              />
            </a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
