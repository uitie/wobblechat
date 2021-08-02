import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const QuestionCard = (props) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  const { key, isActive, title, description, chatURL } = props;


// let answerButton = '';

//   if (isActive===true){
//    answerButton = '<Button variant="primary">Answer this question</Button>';
//   }



  return (
    <>




<Card key={key}>
  <Card.Body>

<div className="question-container">
  <Card.Title>{title}</Card.Title>
  <Button variant="primary">Answer question</Button>
</div>
    <Card.Text>
    {description}
    </Card.Text>
  </Card.Body>
</Card>

</>

  );
};

export default QuestionCard;
