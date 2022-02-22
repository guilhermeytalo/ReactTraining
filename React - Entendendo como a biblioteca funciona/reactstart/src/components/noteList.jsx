import React, { Component } from "react";
import CardNote from "./CardNote/cardNote";

class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Teste", "Estudos").map((category, index) => {
          return (
            <li key={index}>
              <div>{category}</div>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
