import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there, I'm Niko{" "}
        <img
          src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
          width='28'
        />
        <br />
        Philomath, sushi-lover, musician.
      </SectionTitle>
      <SectionText>
        I’m a full-stack developer passionate about building meaningful tech
        solutions to real problems.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "mailto:niko@nikoescobal.com?subject=Hey Niko!")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
