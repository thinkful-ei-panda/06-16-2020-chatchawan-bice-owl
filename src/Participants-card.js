import React from 'react';
import './participants-card.css';

function ParticipantsCard(props) {
  
  let onStage;
  
  if (props.onStage) onStage = 'onStage';

  let inSession;
  
  if (props.inSession) inSession = 'inSession';

  return (
    <div className="ParticipantCard">
      <h3>{props.name}</h3>
      <img src={props.avatar} alt={`${props.name}'s Avatar`} />
      <span>{inSession}</span>
      <span>{onStage}</span>
    </div>
  );

}

export default ParticipantsCard;