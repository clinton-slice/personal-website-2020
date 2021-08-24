import React from "react";
import PropTypes from "prop-types";
import { Title, Date } from "../Card/styledComponents";
import { FixedSizeCard, Description, Company, Duties } from "./styledComponents";

const ExperienceCard = ({
  period,
  jobTitle,
  company,
  location,
  description,
  color,
  text,
  duties
}) => {
  const { beginDate, endDate } = period;

  console.log(duties)

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
        <Duties>
          {duties.map(duty => <li>{duty}</li>)}
        </Duties>
    </FixedSizeCard>
  );
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
  duties: PropTypes.arrayOf(PropTypes.string)
};

export default ExperienceCard;
