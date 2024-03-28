import React, {Component} from "react";

class App2 extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e){
    const {nome, email, senha} = this.state;

    if(nome !== '' && email !== '' && senha !== ''){
    this.setState({error: ''})
    alert(`nome ${nome} \nemail ${email} \nSenha: ${senha}`);
    }else{
      this.setState({error: 'OPS! DIGITA TUDO MACACO'})
    }

    e.preventDefault(); //pra pagina não atualizar depois que preencher
  }

  render(){
    return(
      <div>
        <h1>Novo Usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input type="text" value={this.state.nome} onChange={(e)=>{this.setState({nome: e.target.value})}}/>
          <label>Email: </label>
          <input type="email" value={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}}/>
          <label>Senha: </label>
          <input type="password" value={this.state.senha} onChange={(e)=>{this.setState({senha: e.target.value})}}/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}

export default App2;