import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const QuestionsContainer = ({ questions }) => {
  //questions object passed down as prop from MainAppContainer
  //  const [{ questionId, isActive, title, description, chatURL }] = questions;

  const activeQuestionObjects = questions.filter(question => question.isActive === true).map(
    ({ questionId, isActive, title, description, chatURL }, i) => {
      return (
        <QuestionCard
          key={i}
          questionId={questionId}
          title={title}
          description={description}
          chatURL={chatURL}
        />
      );
    }
  );

  const inactiveQuestionObjects = questions.filter(question => question.isActive === false).map(
    ({ questionId, isActive, title, description, chatURL }, i) => {
      return (
        <QuestionCard
          key={i}
          questionId={questionId}
          title={title}
          description={description}
          chatURL={chatURL}
        />
      );
    }
  );

  return (
    <div className="question-window">
      <h2>
      Open questions </h2>
      {activeQuestionObjects}
<br />
      <h2>
      Inactive questions </h2>
      {inactiveQuestionObjects}


    </div>
  );
};

export default QuestionsContainer;
