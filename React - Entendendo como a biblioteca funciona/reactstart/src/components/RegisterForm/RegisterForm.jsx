import React, { Component } from "react";
import "./style.css";
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handlerChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handlerChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNewCard(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(`new card ${this.title} ${this.text}`);
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form-register" onSubmit={this._createNewCard.bind(this)}>
        <input
          type={"text"}
          placeholder="Título"
          className="form-register_input"
          onChange={this._handlerChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva a sua nota"
          className="form-register_input"
          onChange={this._handlerChangeText.bind(this)}
        ></textarea>
        <button className="form-register_input form-register_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default RegisterForm;
