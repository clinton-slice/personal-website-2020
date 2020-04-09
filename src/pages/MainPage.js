import React from "react";
import { ThemeProvider, withTheme } from "styled-components";
import { personalInfo, education, experiences, theme } from "config";
import { Main, FixedContent, LeftSection, RightSection } from "../sections";
import {
  BusinessCard,
  EducationFactory,
  ExperiencesFactory,
} from "../components";

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <LeftSection>
          <FixedContent>
            <BusinessCard personalInfo={personalInfo} />
            <EducationFactory education={education} />
          </FixedContent>
        </LeftSection>
        <RightSection>
          <ExperiencesFactory experiences={experiences} />
        </RightSection>
      </Main>
    </ThemeProvider>
  );
};

export default withTheme(MainPage);
