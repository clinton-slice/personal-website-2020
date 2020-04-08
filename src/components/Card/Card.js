import React from "react";
import PropTypes from "prop-types";
import Section from "./styledComponents";

const Card = ({ className, color, text, children }) => {
  return (
    <Section className={className} color={color} text={text}>
      {children}
    </Section>
  );
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
