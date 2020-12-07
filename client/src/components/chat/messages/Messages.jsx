import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import { MessageBlock } from './MessageBlock';

import './Messages.scss';

export const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <MessageBlock message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};
