import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

export default class App extends Component {
  

  state = {
    title: null,
  };

  getTodos = () => {
      axios
        .get(`/api/todos`).then(({data}) => {
          console.log(data[0].title);
          this.setState({
            title: data[0].title
          });
        })
  }
  

  constructor() {
    super();
    this.getTodos();
  }
  
  render() {
    const {title} = this.state;
    console.log(title)

    return (
      <div>
        <p>{title}</p>
      </div>
    )
  }
}