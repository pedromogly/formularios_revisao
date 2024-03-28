import React, {Component} from "react";

class App3 extends Component{
  constructor(props){
    super(props);
    this.state = {
      dadosForm: {
        nome: '',
        email: '',
        senha: '',
      },
      error: '',
    }
    this.preencherForm = this.preencherForm.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  preencherForm(e){
    let form = this.state.dadosForm;
    form[e.target.name] = e.target.value;
    this.setState({dadosForm: form});
  }

  cadastrar(e){
    const {nome, email, senha} = this.state.dadosForm;

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
          <input type="text" name="nome" value={this.state.dadosForm.nome} onChange={this.preencherForm}/>
          <label>Email: </label>
          <input type="email" name='email' value={this.state.dadosForm.email} onChange={this.preencherForm}/>
          <label>Senha: </label>
          <input type="password" name='senha' value={this.state.dadosForm.senha} onChange={this.preencherForm}/>
          <button type="submit">Cadastrar</button>
        </form>
        <div>
          {this.state.dadosForm.nome}
          {this.state.dadosForm.email}
          {this.state.dadosForm.senha}
        </div>
      </div>
    )
  }
}

export default App3;