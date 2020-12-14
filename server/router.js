const express = require('express');
const router = express.Router();

const { getUsersInRoom } = require('./users.helper');

router.get('/', (req, res) => {
  res.send('server running');
});

router.get('/users/:room', (req, res) => {
  const { room } = req.params;
  const usersInRoom = getUsersInRoom(room);

  return res.status(200).json(usersInRoom);
});

module.exports = router;
