import React, { useState } from "react";
import FormularioCadastro from "./Components/FormularioCadastro";
import TabelaJogadores from "./Components/TabelaJogadores";

function App() {
  const [funcionarios, setFuncionarios] = useState([]);

  const adicionarFuncionario = (funcionario) => {
    setFuncionarios([...funcionarios, funcionario]);
  };

  return (
    <div>
      <h1>Cadastro de Funcionários</h1>
      <FormularioCadastro adicionarFuncionario={adicionarFuncionario} />
      <h2>Lista de Funcionários:</h2>
      <ul>
        {funcionarios.map((funcionario, index) => (
          <li key={index}>
            <strong>Nome:</strong> {funcionario.nome}
            <br />
            {funcionario.matricula && (
              <>
                <strong>Matrícula:</strong> {funcionario.matricula}
                <br />
              </>
            )}
            {funcionario.cpf && (
              <>
                <strong>CPF:</strong> {funcionario.cpf}
                <br />
              </>
            )}
            {funcionario.posicao && (
              <>
                <strong>Posição:</strong> {funcionario.posicao}
                <br />
              </>
            )}
            {funcionario.quantidadeGols && (
              <>
                <strong>Quantidade de Gols:</strong>{" "}
                {funcionario.quantidadeGols}
                <br />
              </>
            )}
            {funcionario.preco && (
              <>
                <strong>Preço:</strong> {funcionario.preco}
                <br />
              </>
            )}
            {funcionario.dataInicio && (
              <>
                <strong>Data de Início:</strong> {funcionario.dataInicio}
                <br />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
