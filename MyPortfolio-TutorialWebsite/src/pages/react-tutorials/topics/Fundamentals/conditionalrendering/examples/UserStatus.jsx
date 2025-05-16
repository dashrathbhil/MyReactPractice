import React from 'react';

function UserStatus({isOnline}) {
  return (
    <>
      <h5>Using Ternary Operator</h5>
      <p> <strong>{isOnline ? 'User is Online' : 'User is Offline'}</strong></p>
    </>
  );
}

export default UserStatus;
