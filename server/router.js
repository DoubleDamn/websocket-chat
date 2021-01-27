const express = require('express');
const router = express.Router();

const { getUsersInRoom } = require('./users.helper');

router.get('/', (req, res) => {
  res.send('server running');
});

router.get('/users/:room/:name', (req, res) => {
  const { room, name } = req.params;
  const usersInRoom = getUsersInRoom(room);
  const error =
    usersInRoom.find((i) => i.name === name) === undefined ? false : true;

  return res.status(200).json(error);
});

module.exports = router;
