import React, { Component } from 'react';
import NoteList  from "./components/noteList";
import RegisterForm  from "./components/registerForm.jsx"

class App extends Component {
  render() {
    return (
      <section>
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
