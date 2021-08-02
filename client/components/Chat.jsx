import React, { useEffect } from 'react';

//import logo from './assets/chat_logo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Chat() {

  // var socket = io();

  // var messages = document.getElementById('messages');
  // var form = document.getElementById('form');
  // var input = document.getElementById('input');

  // form.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   if (input.value) {
  //     socket.emit('chat message', input.value);
  //     input.value = '';
  //   }
  // });

  // socket.on('chat message', function(msg) {
  //   var item = document.createElement('li');
  //   item.textContent = msg;
  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
  

    return (

      <>

 
 

      <div className="App">
      <ul id="messages">
        <li>Message 1</li>
        <li>Message 2</li>
        <li>Message 3</li>
        <li>Message 4</li>
      </ul>
    <form id="form-chat" action="">
      <input id="input-chat" /><button>Send</button>
    </form>
      </div>


</>

    );
}

export default Chat;