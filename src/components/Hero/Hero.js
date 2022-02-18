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
        Full Stack Dev. Musician.
      </SectionTitle>
      <SectionText>
        React and Rails enthusiast with an eye for good design. I love
        meaningful tech, making music, learning new things, and sushi.
      </SectionText>
      <SectionText>
        Multi-skilled full-stack developer with hands-on experience in
        developing, and cofounding tech startups.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "mailto:niko@nikoescobal.com?subject=Hey Niko!")
        }
      >
        Let's Jam!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
