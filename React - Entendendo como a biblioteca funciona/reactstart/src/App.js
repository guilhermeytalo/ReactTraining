import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm";
import ListNote from "./components/ListNote";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNotesArray
    }
    this.setState(newState);
  }
  render() {    
    return (
      <section className="content">
        <RegisterForm createNote={this.createNote.bind(this)} />
        <ListNote notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
