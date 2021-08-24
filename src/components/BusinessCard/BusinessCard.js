import React from "react";
import PropTypes from "prop-types";
import { Card, Contacts } from "../../components";
import {
  Name,
  JobTitle,
  ImageContainer,
  DownloadButton,
  Summary,
} from "./styledComponents";
import profileImage from "../../images/profile.jpg";
import myResume from "../../images/clinton_nkemdilim_resume.pdf";
import { withPrefix } from "gatsby";

const BusinessCard = ({ personalInfo }) => {
  const { name, jobTitle, location, contacts, summary, ctaText } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <Card color={"linear-gradient(-60deg, #ff5858 0%, #f09819 100%);"}>
        <ImageContainer>
          <div className="image">
            <img
              src={profileImage}
              width="127.433px"
              height="132.743px"
              alt="profilePhoto"
            ></img>
          </div>
        </ImageContainer>
        <Name>
          {firstName}
          <strong> {lastName}</strong>
        </Name>
        <JobTitle>
          {jobTitle}
          <small>{location}</small>
        </JobTitle>
        <Contacts contactInfo={contacts} />
        <Summary>{summary}</Summary>
        <DownloadButton
          className="button"
          rel="noopener noreferrer"
          href={withPrefix(myResume)}
          target="_blank"
        >
          {ctaText}
        </DownloadButton>
    </Card>
  );
};

BusinessCard.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  contacts: PropTypes.array,
};

export default BusinessCard;
