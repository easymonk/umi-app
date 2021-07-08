import React from 'react';

function User() {
  return (
    <div>
      User
    </div>
  );
}
User.wrappers = ['@/wrappers/auth']
User.title = 'Home Page User';
export default User;
