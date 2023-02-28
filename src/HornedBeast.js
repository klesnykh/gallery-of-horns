import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hearts: 0,
      helpMe: false
    };
  }

handleFavs = () => {
  this.setState({
    hearts: this.state.hearts+1,
  });
}

needsHelp = () =>{
  this.setState({
    helpMe:true
  });
}

gotHelp = () =>{
  this.setState({
    helpMe: false
  });
}

  render(){
    return(
      <Col>
        <Card style={{width: '18rem'}}>
          <h2>{this.props.title}</h2>
          <p>{this.state.hearts} Favorites</p>
          <p onClick={this.handleFavs}>❤️</p>
          <img src={this.props.imgUrl} alt={this.props.description} title={this.props.title}></img>
          <p>{this.props.description}</p>
          <div>{this.state.helpMe ? 'I need help!' : ''}</div>
        </Card>
      </Col>
    )
  }
};

export default HornedBeast;