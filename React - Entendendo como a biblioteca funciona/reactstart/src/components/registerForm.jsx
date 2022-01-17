import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <form>
        <input type={"text"} placeholder="Título" />
        <textarea placeholder="Escreva a sua nota"></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default RegisterForm;