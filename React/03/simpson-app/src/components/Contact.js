import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
      <div className="Contact">
        <img className="avatar" src={props.avatar} alt="toto" />
  
        <div className="status">
          <div className="name">{props.name}</div>
          {
              props.online ? (
                  <div>
            <div className="status-online"></div>
              <span className="status-text">Online</span>
              </div>
          ) : (
              <div>
            <div className="status-offline"></div>
              <span className="status-text">Offline</span>
              </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Contact;