import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm";
import ListNote from "./components/ListNote";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();
    this.notes = [];
  }
  createNote(title, text) {
    const newNote = {
      title,
      text,
    };
    this.notes.push(newNote);
  }
  render() {
    return (
      <section className="content">
        <RegisterForm createNote={this.createNote.bind(this)} />
        <ListNote notes={this.notes} />
      </section>
    );
  }
}

export default App;
