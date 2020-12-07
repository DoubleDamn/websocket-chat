import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';

import './JoinPage.scss';

const JoinPage = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container fluid className="join-container">
      <Form>
        <h1>Join the chat</h1>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupRoom">
          <Form.Label>Room</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter room name"
            onChange={(event) => setRoom(event.target.value)}
          />
        </Form.Group>

        <Link to={`/chat?name=${name}&room=${room}`}>
          <Button type="submit" variant="primary" disabled={!name || !room}>
            Sign In
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default JoinPage;
