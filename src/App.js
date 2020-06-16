import React from 'react';
import ParticipantsList from './Participants-list';
import ChatList from './Chat-list'
import './App.css';

function App() {

  return (

     <div className="App">
       <ParticipantsList />
       <ChatList />
     </div>

  );

}

export default App;
