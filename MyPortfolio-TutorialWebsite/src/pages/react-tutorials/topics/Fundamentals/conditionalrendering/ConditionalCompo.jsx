import React from 'react'
import Greetings from './Greetings';
import UserStatus from './examples/UserStatus';


function ConditionalCompo() {
  const userOnline = false;
  const isLoggedIn = true;

  return (
    <>
      <h2>Conditional Rendering</h2>
      <ol>
        <li><Greetings isLoggedIn={isLoggedIn} /></li>
        <li><UserStatus isOnline={userOnline} /></li>
      </ol>
    </>
  );
}

export default ConditionalCompo;
