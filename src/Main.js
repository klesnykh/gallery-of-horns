import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyForm from './MyForm'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formViewByHorns: '',
      filteredData: this.props.data,
      
    }
  }

  handleFormSubmit = (hornNumber) => {
    let newData = [];
    if(hornNumber<4){
      newData = (this.props.data.filter(beast => beast.horns===hornNumber));
    }
    else if (hornNumber===4){
      newData = (this.props.data.filter(beast => beast.horns>3));
    }
    else{
      newData = this.props.data;
    }
    this.setState({
      filteredData: newData
    })

  }

  render (){
    let beasts = this.state.filteredData.map((beast, idx) =>{
      return (
        <HornedBeast
          title={beast.title}
          imgUrl={beast.image_url}
          description={beast.description}
          key={beast._id}
          keyword={beast.keyword}
          horns={beast.horns}
          addHearts={this.props.addHearts}
          handleOpenModal={this.props.handleOpenModal}
        />
      )
    });

    return (
      <main>
        <MyForm
          handleFormSubmit={this.handleFormSubmit}/>
        <Container>
          <Row>
            {beasts}
          </Row>
        </Container>
      </main>
    )
  }
};

export default Main;