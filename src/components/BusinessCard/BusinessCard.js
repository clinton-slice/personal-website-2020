import React from "react";
import PropTypes from "prop-types";
import { Card, Contacts } from "../../components";
import { Name, JobTitle, ImageContainer } from "./styledComponents";
import profileImage from "../../images/profile.jpg";

const BusinessCard = ({ personalInfo }) => {
  const { name, jobTitle, location, contacts } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <>
      <Card color={"linear-gradient(-60deg, #ff5858 0%, #f09819 100%);"}>
        <>
          <ImageContainer>
            <div className="image">
              <img
                src={profileImage}
                width="127.433px"
                height="132.743px"
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
        </>
      </Card>
    </>
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
