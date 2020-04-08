import React from "react";
import PropTypes from "prop-types";
import { Title, Date, ImageWrapper } from "../Card/styledComponents";
import { FixedSizeCard, Image, Description, Company } from "./styledComponents";
import EducationFactory from "../EducationFactory";

const ExperienceCard = ({
  period,
  jobTitle,
  company,
  location,
  description,
  url,
  image,
  color,
  text,
}) => {
  const { beginDate, endDate } = period;

  return (
    <FixedSizeCard color={color} text={text}>
      <Title>
        <Company>{company}</Company>
        <Date>
          {beginDate} - {endDate}
        </Date>
      </Title>
      <p>
        {jobTitle} - <small>{location}</small>
      </p>
      <Description>{description}</Description>
      {/* <ImageWrapper href={url} target="_blank" rel="noopener noreferrer">
        <Image src={image} title={company} alt={company} />
      </ImageWrapper> */}
    </FixedSizeCard>
  );
};
const ExperiencesFactory = ({ experiences }) => {
  const Experiences = experiences.map((info) => (
    <ExperienceCard {...info} key={info.company} />
  ));
  return <>{Experiences}</>;
};

ExperiencesFactory.propTypes = {
  experiences: PropTypes.arrayOf(Object),
};

ExperienceCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

export default EducationFactory;
