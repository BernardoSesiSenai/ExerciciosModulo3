import React, { useState } from "react";

function FormularioCadastro() {
  const [tipoFuncionario, setTipoFuncionario] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [cpf, setCpf] = useState("");
  const [posicao, setPosicao] = useState("");
  const [quantidadeGols, setQuantidadeGols] = useState(0);
  const [preco, setPreco] = useState(0);
  const [dataInicio, setDataInicio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tipoFuncionario === "jogador") {
      // Lógica para cadastrar jogador
      console.log("Cadastro de jogador:", {
        nome,
        matricula,
        cpf,
        posicao,
        quantidadeGols,
        preco,
      });
    } else if (tipoFuncionario === "tecnico") {
      // Lógica para cadastrar técnico
      console.log("Cadastro de técnico:", { nome, matricula, cpf, dataInicio });
    }
    // Limpar campos do formulário
    setTipoFuncionario("");
    setNome("");
    setMatricula("");
    setCpf("");
    setPosicao("");
    setQuantidadeGols(0);
    setPreco(0);
    setDataInicio("");
  };

  const handleTipoFuncionarioChange = (event) => {
    setTipoFuncionario(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tipoFuncionario">Tipo de Funcionário:</label>
        <select
          id="tipoFuncionario"
          value={tipoFuncionario}
          onChange={handleTipoFuncionarioChange}
        >
          <option value="">Selecione</option>
          <option value="jogador">Jogador</option>
          <option value="tecnico">Técnico</option>
        </select>
      </div>

      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="matricula">Matrícula:</label>
        <input
          type="text"
          id="matricula"
          value={matricula}
          onChange={(event) => setMatricula(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          required
        />
      </div>

      {tipoFuncionario === "jogador" && (
        <>
          <div>
            <label htmlFor="posicao">Posição:</label>
            <input
              type="text"
              id="posicao"
              value={posicao}
              onChange={(event) => setPosicao(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="quantidadeGols">Quantidade de Gols:</label>
            <input
              type="number"
              id="quantidadeGols"
              value={quantidadeGols}
              onChange={(event) =>
                setQuantidadeGols(Number(event.target.value))
              }
              required
            />
          </div>
          <div>
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              id="preco"
              value={preco}
              onChange={(event) => setPreco(Number(event.target.value))}
              required
            />
          </div>
        </>
      )}

      {tipoFuncionario === "tecnico" && (
        <div>
          <label htmlFor="dataInicio">Data de Início:</label>
          <input
            type="text"
            id="dataInicio"
            value={dataInicio}
            onChange={(event) => setDataInicio(event.target.value)}
            required
          />
        </div>
      )}

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;
