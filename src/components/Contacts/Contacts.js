import React from "react";
import PropTypes from "prop-types";
import { SVGIcon } from "../../components";
import styled from "styled-components";

const Contacts = (contacts) => {
  const { contactInfo } = contacts;

  const test = contactInfo.map((contact) => {
    return (
      <SVGIcon
        key={contact.name}
        name={contact.name}
        color={contact.color}
        url={contact.url}
        fill={contact.fill}
      />
    );
  });

  return <ContactIconWrapper>{Array.isArray(test) && test}</ContactIconWrapper>;
};

Contacts.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Contacts;
