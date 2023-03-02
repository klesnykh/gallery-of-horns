import React from 'react';
import {Form, Button } from 'react-bootstrap';

class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formViewByHorns: '',
    }
  }

  handleHornsChange = (event) => {
    this.setState({
      formViewByHorns: event.target.value
    });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.handleFormSubmit(parseInt(this.state.formViewByHorns));
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Label>Filter Beasts by Amount of Horns
          <Form.Select name="selected" onChange={this.handleHornsChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">more than 3</option>
          </Form.Select>
        </Form.Label>
        <Button type="submit">Filter</Button>
      </Form>
    )
  }
}

export default MyForm;