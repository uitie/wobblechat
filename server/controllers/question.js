// const path = require('path'); 
// const { ModuleFilenameHelpers } = require('webpack');
const pool = require("../db/connect");

const questionController = {};

//getQuestions should return an array of Questions
questionController.getQuestions = (req, res, next) => {
  const questionQuery = 'select id,title,description,url from questions where isAnswered = false'
  // console.log("response: ", res);
  // console.log("requestion: ",  req);
  pool
    .query(questionQuery)
    .then(questions => {
      // console.log("response: ", questions);
      const {id, title, description, url} = questions.rows[0];
      res.locals.questions = questions;
    })
    .catch(err => {
      return next({
          status: 500,
          message: "Error querying Questions",
          error: err
      });
    })
  return next();
}

//postQuestion should create a Question and next() will call openChat
questionController.postQuestion = (req, res, next) => {
  // ----------> url comes from websockets
  //userid comes from user controller (prev step in create question). 
  const url = 'testKenny10';
  const title = 'testingPostController';
  const description = 'test';
  const creator = '2';
  const params = [url,title,description,creator];
  const insertQuestion = 'INSERT INTO questions (url,title,description,creator) VALUES ($1,$2,$3,$4) RETURNING *'

  pool
    .query(insertQuestion, params)
    .then(newQuestion => {
      // console.log(newQuestion);
      res.locals.newQuestion = newQuestion;
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error creating Questions",
        error: err
      })
    })
  return next();
}

//openChat should... send a req to Websockets? 
//gets details from messages
//puts details into question
questionController.getMessages = (req, res, next) => {
  //needs to pull existing Messages related to Questions (join tables)
  const prevMessages = `SELECT * FROM messages LEFT JOIN questions ON messages.questionId = questions.id AND questions.id = ${req.params.id}`
  
  pool
    .query(prevMessages)
    .then(messages => {
      if(!messages) return next();
      res.locals.messages = messages;
      // console.log(messages);
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error grabbing messages",
        error: err
      })
    })
  return next();
}
  
//   //isActive is true ------> is this a put? 
// questionController.putQuestion = (req, res, next) => {
//   return next();
// }

// //closeChat should... put isActive = false

// questionController.putChat = (req, res, next) => {
//   return next();
// }

//isAnswered should update (put) isAnswered field to True
questionController.putAnswered = (req, res, next) => {
  //query -> update question req.params.id isAnswered = true
  const updateQuestion = `UPDATE questions SET isAnswered = true WHERE id = ${req.params.id} RETURNING Id`
  pool
    .query(updateQuestion)
    .then(id => {
      res.locals.id = id;
      // console.log(id);
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error setting isAnswered to true",
        error: err
      })
    })
  return next();
}


module.exports = questionController;