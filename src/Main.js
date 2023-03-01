import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

  render (){
    let beasts = this.props.data.map((beast, idx) =>{
      return (
        <HornedBeast
          title={beast.title}
          imgUrl={beast.image_url}
          description={beast.description}
          key={idx}
          keyword={beast.keyword}
          horns={beast.horns}
          addHearts={this.props.addHearts}
          handleOpenModal={this.props.handleOpenModal}
        />
      )
    });

    return (
      <main>
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