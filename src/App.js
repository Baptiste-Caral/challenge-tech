import React, { Component } from 'react';
import './App.css';
import base from './base'

class App extends Component{

// newPerson = form value
  newPerson = null

  state = {
    value: '',
    persons: []
  }
  
  componentDidMount() {
    base.syncState('/persons', {
      context: this,
      state: 'persons'
    }) 
  }
  
  handleChange = (e) => {
    this.newPerson = e.target.value
    console.log(this.newPerson);
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState( {
      
      persons: [
        ...this.state.persons,
       {nom: this.newPerson} 
      ]
    }) 
    this.newPerson = '' 
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
            <input id="name" name="name" type="text" value={this.newPerson} onChange={this.handleChange} placeholder="Charalampos" />
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
