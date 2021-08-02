const pool = require("../db/connect");

const messageController = {};

//openChat should... send a req to Websockets? 
//gets details from messages
//puts details into question
messageController.getMessages = (req, res, next) => {
  //needs to pull existing Messages related to Questions (join tables)
  const prevMessages = `SELECT messages.*, questions.url FROM messages INNER JOIN questions ON messages.questionId = questions.id AND questions.id = $1`;
  const params = [req.params.id];
  pool
    .query(prevMessages, params)
    .then(data => {
      res.locals.messages = data.rows;
      return next();
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error grabbing messages",
      })
    })
}

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