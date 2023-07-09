import React from "react";
import FormularioCadastro from "./Components/FormularioCadastro";

class Usuario {
  constructor(nome, matricula, cpf) {
    this.nome = nome;
    this.matricula = matricula;
    this.cpf = cpf;
  }
}

class Jogador extends Usuario {
  constructor(nome, matricula, cpf, posicao, quantidadeGols, preco) {
    super(nome, matricula, cpf);
    this.posicao = posicao;
    this.quantidadeGols = quantidadeGols;
    this.preco = preco;
  }

  fazerGol() {
    this.quantidadeGols += 1;
  }
}

class Tecnico extends Usuario {
  constructor(nome, matricula, cpf, dataInicio) {
    super(nome, matricula, cpf);
    this.dataInicio = dataInicio;
  }

  escalarJogadores(jogadores) {
    // Retorna a lista de jogadores escalados
    return jogadores;
  }
}

function App() {
  // Exemplo de uso das classes
  const jogador1 = new Jogador(
    "Bernardo",
    "123",
    "123.456.789-00",
    "Atacante",
    1,
    1000000
  );
  jogador1.fazerGol();

  const tecnico1 = new Tecnico(
    "Mano Menezes",
    "001",
    "987.654.321-00",
    new Date()
  );

  console.log(jogador1);
  console.log(tecnico1);

  return (
    <div>
      <h1>Cadastro de Funcionários</h1>
      <FormularioCadastro />
    </div>
  );
}

export default App;
