const express = require('express');
const questionController = require('../controllers/question.js');
const messageController = require('../controllers/message.js');
const router = express.Router();

//call controller methods for each type of request to endpoints

//get all questions to render main page
router.get('/', questionController.getQuestions, (req,res) => {
  return res.status(200).json(res.locals.questions);
})

//create new question ----> needs websockets
router.post('/', questionController.postQuestion, questionController.getQuestions, (req,res) => {
  return res.status(200).json({
    newQuestion: res.locals.questions[0].url,
    questions: res.locals.questions,
  });
})

//get all messages when user enters a chat
router.get('/:id', messageController.getMessages, (req,res) => {
  return res.status(200).json({
    messages: res.locals.messages,
    url: res.locals.messages.length > 0 ? res.locals.messages[0].url : null // Return null or the url
  });
})

// -------> on logout, user's chat needs to  be Inactive

// -------> messages need a Creator relationship

// -------> close chat should create a message "<user> has left the chat"
// --------> and set isActve to false
// router.post('/message/:id', questionController.closeChat, (req,res) => {
//   return res.status(200).json(res.locals.chatId);
// })

// set question to isAnswered = true
router.put('/:id', questionController.putAnswered, (req,res) => {
  return res.status(200).json(res.locals.id);  /// <------- tbd
})


module.exports = router;