import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render(){
    return(
      <Modal show={this.props.isModalDisplaying} onHide={this.props.handleCloseModal}>
          <img src={this.props.imgUrl} alt=""></img>
          <h2>{this.props.description}</h2>
        </Modal>
    )
  }
};

export default SelectedBeast;
