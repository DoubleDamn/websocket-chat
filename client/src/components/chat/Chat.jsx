import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Form } from 'react-bootstrap';

import { ChatHeader } from './chat-header/ChatHeader';

import './Chat.scss';
import { Messages } from './messages/Messages';

let socket;
const ENDPOINT =
  'https://ann-react-websocket-chat.herokuapp.com/' || 'localhost:5000';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (currentMessage) {
      socket.emit('sendMessage', currentMessage, () => setCurrentMessage(''));
    }
  };

  const onKeyPress = (e) => (e.key === 'Enter' ? sendMessage(e) : null);

  return (
    <div fluid className="chat-container">
      <div className="content">
        <ChatHeader room={room} />
        <Messages messages={messages} name={name} />
        <Form className="chat-form">
          <input
            className="input"
            type="text"
            placeholder="Enter room name"
            placeholder="Type a message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={onKeyPress}
          />
          <button
            type="submit"
            className="send-button"
            onClick={(e) => sendMessage(e)}
          >
            Send
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
