import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import QuestionsContainer from './QuestionsContainer';
<<<<<<< HEAD
<<<<<<< HEAD
import CreateQuestionForm from '../components/CreateQuestionForm';
=======
=======
import CreateQuestionForm from '../components/CreateQuestionForm';
>>>>>>> 31b8a912cd275fe44120c051074c401fe2185949
import Chat from '../components/Chat';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createPortal } from 'react-dom';
import fetch from 'node-fetch';

<<<<<<< HEAD
>>>>>>> upstream/dev

=======
>>>>>>> 31b8a912cd275fe44120c051074c401fe2185949
class MainAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBool: true,
      //has data been retrieved from the backend yet?
      fetchedData: false,
      //question data, an array of question objects 
      questions: [],
    };
}

  componentDidMount() {
    // retrieving question data from db via express
      fetch('/api/questions') 
        .then(res => res.json())
        .then((questionData) => {
          //input validation
          if (!Array.isArray(questionData)) questionData = [];
          //update state with fetched data
          this.setState({fetchedData: true, questions: questionData});
        })
        .catch(err => console.log('MainAppContainer.componentDidMount has error when making fetch request for questionsData: ERROR: ', err));
    }
  
    
  // const dummyQuestionData = [
  //   {
  //     questionId: 1,
  //     isActive: true,
  //     title: 'Why is the sky blue?',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     chatURL: 'http://www.yourchat.com?id=56'
  //  },
  //  {
  //   questionId: 2,
  //   isActive: true,
  //   title: 'Where do babies come from?',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   chatURL: 'http://www.yourchat.com?id=56'
  // },
  //  {
  //   questionId: 3,
  //   isActive: false,
  //   title: 'How does react work?',
  //   description: 'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   chatURL: 'http://www.yourchat.com?id=56'
  // }
  // ];
   
  // this.setState({
  //   questions: dummyQuestionData,
  //   fetchedData: true
  // })



// }


  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  render() {

    if (!this.state.fetchedData) return (
      <div>
        <h2>Loading data, please wait...</h2>
      </div>
    );

    const { questions } = this.state;
    //if fetch request retrieved nothing, there is nothing to display
    if (!questions) return null;
    if (!questions.length) {
      // console.log(this.state);
      return (
      <div>Sorry, no questions to display</div>
    
    )
      };

    return (
<>
<div className="top-menu-container"><Link to={'/'} className="brandname">Wobblechat</Link>
<div><Link to={'/create'}><Button variant="primary">Ask a question</Button></Link>
&nbsp;&nbsp;<Link to={'/signout'}><Button variant="secondary">Sign out</Button></Link></div>
</div>




<Card className="chat-style">
<Chat />
</Card>
<br/>

<QuestionsContainer  questions={this.state.questions} />
<<<<<<< HEAD
<<<<<<< HEAD
<CreateQuestionForm />
</div>          
=======

{/* <Chat /> */}
  </>        
>>>>>>> upstream/dev

=======
<CreateQuestionForm />
  </>        
>>>>>>> 31b8a912cd275fe44120c051074c401fe2185949
)
  }
}

export default MainAppContainer;
