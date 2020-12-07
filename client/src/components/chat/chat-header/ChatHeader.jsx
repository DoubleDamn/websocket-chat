import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BoxArrowLeft, Dot } from 'react-bootstrap-icons';

// import onlineIcon from '../../icons/onlineIcon.png';
// import closeIcon from '../../icons/closeIcon.png';

import './ChatHeader.scss';
export const ChatHeader = ({ room }) => (
  <Container fluid className="header-container">
    <div className="header-block-left">
      <Dot className="header-icon" fill="#4de24d" />
      <span>{room}</span>
    </div>
    <div className="header-block-right">
      <a href="/">
        <BoxArrowLeft fill="white" />
      </a>
    </div>
  </Container>
);
