import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';

import { ENDPOINT } from '../constants';
import './JoinPage.scss';

const JoinPage = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState(false);

  const handleClick = useCallback(async () => {
    let response = await fetch(`${ENDPOINT}/users/${room}/${name}`);
    let err = await response.json();
    setError(err);

    !err && history.push(`/chat?name=${name}&room=${room}`);
  }, [name, room, history]);

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
          {error && (
            <Form.Text className="text-error">
              Username is taken. Choose another one
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formGroupRoom">
          <Form.Label>Room</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter room name"
            onChange={(event) => setRoom(event.target.value)}
          />
        </Form.Group>

        <Button
          onClick={handleClick}
          variant="primary"
          disabled={!name || !room}
        >
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default JoinPage;
