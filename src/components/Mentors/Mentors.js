import React from "react";

import { data } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./MentorsStyles";

const Mentors = () => (
  <Section>
    <SectionTitle>My Mentors</SectionTitle>
    <SectionText>
      Being immersed in an intensive course is great, but sometimes you need
      other perspectives on programming, career, and life in general. So I took
      it upon myself to find brilliant people that could mentor me. Here they
      are:
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Mentors;
