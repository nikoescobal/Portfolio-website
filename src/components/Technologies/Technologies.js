import React from "react";

import TechnologiesFrontEndLogos from "./TechnologiesFrontEndLogos";
import TechnologiesBackEndLogos from "./TechnologiesBackEndLogos";

import { DiReact, DiVisualstudio } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
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

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-End, to Back-end, to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'></DiReact>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Stack:</ListParagraph>
          <LogoContainer>
            <TechnologiesFrontEndLogos />
          </LogoContainer>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRubyonrails size='3rem'></SiRubyonrails>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Stack:</ListParagraph>
          <LogoContainer>
            <TechnologiesBackEndLogos />
          </LogoContainer>
        </ListContainer>
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
