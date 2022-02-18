import React from "react";

import { data } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxName, BoxText } from "./MentorsStyles";

const Mentors = () => (
  <Section>
    <SectionTitle>My Mentors</SectionTitle>
    <SectionText>
      While being in an intensive program was crucial to my growth, I could only
      do so much alone. This is why I found brilliant and inspiring people who
      would mentor and guide me, not only in programming, but in matters
      relating to career and life as well.
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxName>
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: "none", color: "white" }}
              href={card.url}
            >
              {card.name}
            </a>
          </BoxName>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Mentors;
