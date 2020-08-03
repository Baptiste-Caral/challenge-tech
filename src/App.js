import React, { Component } from 'react';
import './App.css';
import base from './base'

class App extends Component{


  state = {

    value: '',
    persons: []
  }
  // Synchronise State with Firebase
  componentDidMount() {
    base.syncState('/persons', {
      context: this,
      state: 'persons'
    }) 
  }
  // Controled input (form)
  handleChange = (e) => {
    this.setState( {
      value: e.target.value
    })
    console.log(this.state.value);
  }
  // add input value in state
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState( {
      value: '',
      persons: [
        ...this.state.persons,
       {nom: this.state.value} 
      ]
    })
  }

  render() {

  // map on persons to create a div for each person.
    const personsList = this.state.persons.map((person, i) => <div key={i} className="member-item">{person.nom}</div>)
    console.log(this.state);
    return (
      <div className="App">
       {/* Header section */}
        <header>
          <h1>
            <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
            Les Argonautes
          </h1>
        </header>
        {/* Main section */}
        <main> 
          {/* New member form */}
          <h2>Ajouter un(e) Argonaute</h2>
          <form onSubmit={this.handleSubmit} className="new-member-form">
            <label for="name">Nom de l&apos;Argonaute</label>
            <input id="name" name="name" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Charalampos" />
            <button type="submit">Envoyer</button>
          </form>
        {/* Member list */}
          <h2>Membres de l'équipage</h2>
          <section className="member-list">
            {personsList}
          </section>
        </main>
        <footer>
          <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        </footer>
      </div>
    )
    }
 ;
}
export default App;
