import React from "react";
import PropTypes from "prop-types";
import ExperienceCard from "../ExperienceCard"

const ExperiencesFactory = ({ experiences }) => {
  const Experiences =
    Array.isArray(experiences) &&
    experiences.map((info) => <ExperienceCard {...info} key={info.company} />);
  return <>{Experiences}</>;
};

ExperiencesFactory.propTypes = {
  experiences: PropTypes.arrayOf(Object),
};

export default ExperiencesFactory;
