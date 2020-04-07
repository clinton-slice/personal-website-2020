import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
