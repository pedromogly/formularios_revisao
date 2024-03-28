import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: 'teste@teste.com',
      senha: '',
      genero: ''
    }

    this.trocaEmail = this.trocaEmail.bind(this);
  }


  trocaEmail(evento){
    let valorDigitado = evento.target.value;
    this.setState({email: valorDigitado});
  }
  

  render() {
    return(
      <div>
        <h2>Macaco Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}/><br/>
        Senha:
        <input type="password" name="senha" value={this.state.senha}
          onChange={(e) => this.setState({senha: e.target.value})}/><br/>
        Genero:
        <select name="genero" value={this.state.genero} onChange={(e)=>{this.setState({genero: e.target.value})}}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.genero}</h3>
        </div>
      </div>
    );
  }
}

export default App;
