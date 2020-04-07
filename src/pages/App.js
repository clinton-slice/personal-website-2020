import React from "react";

import { personalInfo, education, experiences, theme } from "config";
import {
  MainContainer,
  FixedContainer,
  LeftSection,
  RightSection,
} from "../containers";
import { BusinessCard } from "../components";

const App = () => {
  return (
    <MainContainer>
      <LeftSection>
        <FixedContainer>
          <BusinessCard personalInfo={personalInfo} />
        </FixedContainer>
      </LeftSection>
      <RightSection>
        <p>Right</p>
      </RightSection>
    </MainContainer>
  );
};

export default App;
