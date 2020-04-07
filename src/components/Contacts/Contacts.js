import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import styles from "./Contacts.module.css";

const Contacts = ({ name, url }) => {
  library.add(fab);
  return (
    <div
      className={styles.socialLink}
      title={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", name]} size="2x" />
    </div>
  );
};

Contacts.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Contacts;
