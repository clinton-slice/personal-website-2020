import React from "react";
import PropTypes from "prop-types";
import { Card, Contacts } from "../../components";
import styles from "./BusinessCard.module.css";
import profileImage from "../../images/profile.jpg";
import styled, { keyframes } from "styled-components";

const BusinessCard = ({ personalInfo }) => {
  const { name, jobTitle, location, contacts } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <Card>
      <>
        <div className={styles.container}>
          <ImageContainer>
            <img src={profileImage} width="127.433px" height="132.743px"></img>
          </ImageContainer>
        </div>
        <p className={styles.title}>
          {firstName}
          <strong> {lastName}</strong>
        </p>

        <p className={styles.jobTitle}>
          {jobTitle}
          <div>
            <small>{location}</small>
          </div>
        </p>
        <Contacts contactInfo={contacts} />
      </>
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

const imageAnimate = keyframes`
  50% {
    transform: translate(0, 20px);
 }
`;
const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: ${imageAnimate} 3s ease-in-out infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

export default BusinessCard;
