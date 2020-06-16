import React from 'react';
import ParticipantsCard from './Participants-card';
import Participants from './Store';
import './participants-list.css';

function ParticipantsList() {
  
  let tmpParticipants1 = [];

  let tmpParticipants2 = [];

  Participants.forEach ( item => {

    if ( item.inSession === true ) tmpParticipants1.push( item );

    else tmpParticipants2.push( item );

  });

  let tmpParticipants3 = tmpParticipants1.concat( tmpParticipants2 );

  return (
    
    <section className="participant-list">
      
      <div className="participant-list-cards">
        
        {tmpParticipants3.map( listItem => (

            <ParticipantsCard key={listItem.id} name={listItem.name} avatar={listItem.avatar} inSession={listItem.inSession} onStage={listItem.onStage} />
        
        ))}

      </div>

    </section>

  );

}

export default ParticipantsList;