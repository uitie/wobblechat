const pool = require("../db/connect");

const messageController = {};

//postMessage should create a Message from the websockets call
messageController.postMessage = (req, res, next) => {
  // ------> needs to GET data from websockets
  const dateCreated = '1/1/1990';
  const questionId = '1';
  const content = 'test';
  const params = [dateCreated, questionId, content];
  const insertMessage = 'INSERT INTO messages (dateCreated, questionId, content) VALUES ($1,$2,$3) RETURNING *'
  if(!dateCreated || !questionId || !content)
    return next({status: 401, message: "Invalid message data"})
  pool
    .query(insertMessage, params)
    .then(newMessage => {
      // console.log(newMessage);
      res.locals.newMessage = newMessage;
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error creating messages",
        error: err
      })
    })
  return next();
}


module.exports =  messageController;