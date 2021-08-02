const express = require('express');
const messageController = require('../controllers/message.js');
const router = express.Router();


//create new message where body comes from websocket
router.post('/', messageController.postMessage, (req,res) => {
  return res.status(200).json(res.locals.newMessage);
})



module.exports = router;