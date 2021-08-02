const express = require('express');
const questionController = require('../controllers/question.js');
const router = express.Router();

//call controller methods for each type of request to endpoints

//get all questions to render main page
router.get('/', questionController.getQuestions, (req,res) => {
  return res.status(200).json(res.locals.questions);
})

//create new question
router.post('/', /*userController.getId,*/ questionController.postQuestion, /*questionController.openChat,*/ (req,res) => {
  return res.status(200).json(res.locals.newQuestion);
})

//get all messages when user re-enters a previous chat
router.get('/messages/:id', questionController.getMessages, /*questionController.putMessages,*/ (req,res) => {
  return res.status(200).json(res.locals.messages);
})

// -------> nothing happens on close chat....
// router.get('/question/:id', questionController.closeChat, (req,res) => {
//   return res.status(200).json(res.locals.chatId);
// })

// set question to isAnswered = true
router.put('/:id', questionController.putAnswered, (req,res) => {
  return res.status(200).json(res.locals.id);  /// <------- tbd
})


module.exports = router;