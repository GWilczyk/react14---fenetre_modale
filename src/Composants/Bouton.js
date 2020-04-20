import React, { Component } from 'react';
import './Bouton.css';
import Modal from './Modal';

class Bouton extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <button className='Bouton' onClick={this.show}>
          CLIQUE-MOI
        </button>
        <Modal visible={this.state.visible} cache={this.hide} />
      </div>
    );
  }
}

export default Bouton;
