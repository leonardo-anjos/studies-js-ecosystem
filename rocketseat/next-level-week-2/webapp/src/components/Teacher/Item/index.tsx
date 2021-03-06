import React from 'react';
import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/14889591?s=460&u=b79972c05456f0c75541add330a3ccffa4cfc5e8&v=4" alt="Leonardo Anjos" />
        <div>
          <strong>Leonardo Anjos</strong>
          <span>Construcao de analise de algoritimos</span>
        </div>
      </header>
      <p>
        Técnicas de projeto e análise de algoritmos. Algoritmos de busca e ordenação. Árvores. Técnicas de projeto de
        algoritmos eficientes. Introdução a análise de complexidade de algoritmos.
        <br /><br />
        Tipos de problemas. Tratamento de problemas NP-Complexos, NP-Completos e NP-Difíceis. Meta-heurísticas.
      </p>
      <footer>
        <p>
          preco/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;