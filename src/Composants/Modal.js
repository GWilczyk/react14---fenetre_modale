import React from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <div
      className='Modal'
      style={{
        transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0',
      }}
    >
      <button onClick={props.cache}>X</button>
      <p>
        Elit tempor minim voluptate sunt ut pariatur consectetur reprehenderit
        incididunt ullamco. Lorem enim velit ut tempor nisi excepteur pariatur
        tempor. Elit irure et laboris minim aute quis nostrud proident occaecat
        qui culpa. Mollit qui qui ut veniam ex sit in.
      </p>
    </div>
  );
}

export default Modal;
