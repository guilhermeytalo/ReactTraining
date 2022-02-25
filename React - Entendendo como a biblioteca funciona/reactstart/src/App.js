import React, { Component } from 'react';
import RegisterForm  from './components/RegisterForm';
import ListNote from './components/ListNote'; 
import "./assets/App.css";

class App extends Component {
  createNote(title, text) {
    console.log(`new note ${title} ${text}`);
  }
  render() {
    return (
      <section className='content'>
        <RegisterForm createNote={this.createNote}/>
        <ListNote />
      </section>
    );
  }
}

export default App;
