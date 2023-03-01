import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hearts: 0,
    };
  }

handleFavs = () => {
  this.setState({
    hearts: this.state.hearts+1,
  });
}

handleImgClick = () => {
  this.props.handleOpenModal(this.props.description, this.props.imgUrl);
}

  render(){
    return(
      <Col>
        <Card style={{width: '18rem', height: '30rem'}}>
            <h2>{this.props.title}</h2>
            <p>{this.state.hearts} Favorites</p>
            <p onClick={this.handleFavs}>❤️</p>
            <img 
              src={this.props.imgUrl} 
              alt={this.props.description} 
              title={this.props.title}
              onClick={this.handleImgClick}></img>
            <p>{this.props.description}</p>
        </Card>
      </Col>
    )
  }
};

export default HornedBeast;