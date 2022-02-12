import React from "react";

import TechnologiesFrontEndLogos from "./TechnologiesFrontEndLogos";
import TechnologiesBackEndLogos from "./TechnologiesBackEndLogos";
import TechnologiesToolsLogos from "./TechnologiesToolsLogos";

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
          <ListParagraph>Dev Stack:</ListParagraph>
          <LogoContainer>
            <TechnologiesFrontEndLogos />
          </LogoContainer>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRubyonrails size='3rem'></SiRubyonrails>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Dev Stack:</ListParagraph>
          <LogoContainer>
            <TechnologiesBackEndLogos />
          </LogoContainer>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size='3rem'></DiVisualstudio>
        <ListContainer>
          <ListTitle>Software & Tools:</ListTitle>
          <ListParagraph>Tool Stack:</ListParagraph>
          <LogoContainer>
            <TechnologiesToolsLogos />
          </LogoContainer>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
