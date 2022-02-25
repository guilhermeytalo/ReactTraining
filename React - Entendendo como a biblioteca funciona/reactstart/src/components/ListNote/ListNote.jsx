import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";
import './style.css'
class ListNote extends Component {
  render() {
    let data = ["Trabalho", "Teste", "Estudos"];

    return (
      <ul className="list-notes">
        {data.map((category, index) => {
          return (
            <li className="list-notes_item" key={index}>
              <div>{category}</div>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNote;
