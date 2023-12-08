import React, { useState } from 'react';
import bannerImg from './banner.jpg';
import lupaIcon from './lupa.png';
import { Container } from '../Square/styles';

const Search = () => {
// const Busca = ({ id, foto, descricao, onUpdate, onDelete }) => {
//   const [newDescricao, setNewDescricao] = useState(descricao);

//   const handleUpdate = () => {
//     onUpdate(newDescricao);
//   };
 const style = require("./Search.scss");
  return (
  <div>
      <div className='container'>
        <img className='image' alt="Banner" src={bannerImg} />
        <div className="search-container">
        <form>
          <input type="search" placeholder="Digite aqui sua busca..." />
          <button type="submit">
            <img src={lupaIcon} alt="Buscar" className="search-icon" />
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};
export default Search;