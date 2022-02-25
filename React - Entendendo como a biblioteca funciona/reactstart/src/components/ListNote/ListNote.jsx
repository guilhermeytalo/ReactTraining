import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";
import './style.css'
class ListNote extends Component {
  constructor(props) {
    super(props);
    this.notes = props.notes
  }
  
  render() {
    return (
      <ul className="list-notes">
        {this.props.notes.map((note, index) => {
          return (
            <li className="list-notes_item" key={index}>
              <div>{note}</div>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNote;
