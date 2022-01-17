import React, { Component } from "react";
import CardNote from "./cardNote";

class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Teste", "Estudos").map((category) => {
          return (
            <li key={category.toString()}>
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
