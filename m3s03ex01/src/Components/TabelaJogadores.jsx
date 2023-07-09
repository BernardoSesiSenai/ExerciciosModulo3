import React from "react";

const TabelaJogadores = ({ jogadores, editarJogador, excluirJogador }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Posição</th>
          <th>Quantidade de Gols</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {jogadores.map((jogador, index) => (
          <tr key={index}>
            <td>{jogador.nome}</td>
            <td>{jogador.posicao}</td>
            <td>{jogador.quantidadeGols}</td>
            <td>
              <button onClick={() => editarJogador(jogador)}>Editar</button>
              <button onClick={() => excluirJogador(jogador)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaJogadores;
