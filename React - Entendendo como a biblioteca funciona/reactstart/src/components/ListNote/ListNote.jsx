import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";
import './style.css'

class ListNote extends Component {

  render() {
    console.log(this.props)
    return (
      <ul className="list-notes">
        {this.props.notes.map((note, index) => {          
          return (
            <li className="list-notes_item" key={index}>              
              <CardNote title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNote;
