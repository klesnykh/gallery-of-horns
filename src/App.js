import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
//import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hearts: '',
      isModalDisplaying: false,
      imgUrl: '',
      description: ''
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts+'❤️'
    })
  }

  handleCloseModal = () =>{
    this.setState({
      isModalDisplaying: false
    })
  }

  handleOpenModal = (description, imgUrl) =>{
    this.setState({
      isModalDisplaying: true,
      description: description,
      imgUrl: imgUrl
    })
  }

  render(){
    return (
      <>
        <Header hearts={this.state.hearts}/>
        <Main 
          data={data} 
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}/>
        <Footer/>
        {/* <Modal show={this.state.isModalDisplaying} onHide={this.handleCloseModal}>
          <img src={this.state.beastImgUrl} alt=""></img>
          <h2>{this.state.beastDescription}</h2>
        </Modal> */}
        <SelectedBeast
          description={this.state.description}
          imgUrl={this.state.imgUrl}
          isModalDisplaying={this.state.isModalDisplaying}
          handleCloseModal={this.handleCloseModal}
        />
      </>
      );
  }
};

export default App;