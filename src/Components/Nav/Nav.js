import React from 'react';
import List from './List/List';
import './Nav.css';

function Nav() {
  return (
    <header>
     
        <div className='nav' >
            <div> 
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            </div>

   
           <List  />
     
          <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Avatar" />
        </div>

    </header>
  );
}

export default Nav;