 import React, { Component } from "react";
import "./style.css";

export class CardNote extends Component {
  render() {
    return (
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">título</h3>
        </header>
        <p className="card-note_text">escreva a sua nota</p>
      </section>
    );
  }
}

export default CardNote;
