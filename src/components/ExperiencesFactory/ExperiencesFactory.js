import React from "react";
import PropTypes from "prop-types";
import { Title, Date } from "../Card/styledComponents";
import { FixedSizeCard, Description, Company } from "./styledComponents";

const ExperienceCard = ({
  period,
  jobTitle,
  company,
  location,
  description,
  color,
  text,
}) => {
  const { beginDate, endDate } = period;

  return (
    <FixedSizeCard color={color} text={text}>
      <>
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
      </>
    </FixedSizeCard>
  );
};
const ExperiencesFactory = ({ experiences }) => {
  const Experiences =
    Array.isArray(experiences) &&
    experiences.map((info) => <ExperienceCard {...info} key={info.company} />);
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

export default ExperiencesFactory;
