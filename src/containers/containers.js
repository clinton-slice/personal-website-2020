import React from "react";
import PropTypes from "prop-types";
import styles from "./container.module.css";

export const MainContainer = ({ children }) => {
  return <main className={styles.mainContainer}>{children}</main>;
};

export const FixedContainer = ({ children }) => {
  return <div className={styles.fixedContainer}>{children}</div>;
};

export const LeftSection = ({ children }) => {
  return <section className={styles.leftSection}>{children}</section>;
};

export const RightSection = ({ children }) => {
  return <div className={styles.rightSection}>{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

FixedContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

LeftSection.propTypes = {
  children: PropTypes.element.isRequired,
};

RightSection.propTypes = {
  children: PropTypes.element.isRequired,
};
