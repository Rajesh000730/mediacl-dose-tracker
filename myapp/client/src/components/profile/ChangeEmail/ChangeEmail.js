import React from 'react';

const ChangeEmail = (props) => {
    
   window.addEventListener('beforeunload', function (e) {
  // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  // Chrome requires returnValue to be set
     e.returnValue = '';
   });    

  return (
    <div className="email">
    <h1>email</h1>
    </div>
  )
}

export default ChangeEmail;