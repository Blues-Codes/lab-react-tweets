import React from 'react';

function User(userData) {
    return (
      <div className="userData">
        <p>
          {props.tweet.user}
        </p>
        <p>
           {props.tweet.handle}
        </p>
        <br />
      </div>
    );
  }


export default User;