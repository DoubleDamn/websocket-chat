import React from 'react';

export const MessageBlock = ({ message: { text, user }, name }) => {
  let isCurrentUser = user === name.trim().toLowerCase();

  return isCurrentUser ? (
    <div className="message-container incoming-layout">
      <p className="user">{name}</p>
      <div className="incoming-message">
        <p className="message-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container">
      <div>
        <p className="message-text outgoing-color">{text}</p>
      </div>
      <p className="user">{user}</p>
    </div>
  );
};
