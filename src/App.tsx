import React, { useState, useEffect } from 'react';
import bannerImg from '../public/banner.jpg';
import foto from "./foto.png"
import './App.css';
import styled from 'styled-components';

import Square from './components/Square/Square';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

const jsonData = [
  {
    "id": 1,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
  },
  {
    "id": 2,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 3,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 4,
    "foto": "caminho/para/foto4.jpg",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },{
    "id": 5,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
  },
  {
    "id": 6,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 7,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 8,
    "foto": "caminho/para/foto4.jpg",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },{
    "id": 9,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
  },
  {
    "id": 10,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 11,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 12,
    "foto": "caminho/para/foto4.jpg",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },{
    "id": 13,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
  },
  {
    "id": 14,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 15,
    "foto": "./foto.png",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 16,
    "foto": "caminho/para/foto4.jpg",
    "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

interface JsonDataItem {
  id: number;
  foto: string;
  descricao: string;
}

function App() {
  //const [data, setData] = useState(jsonData);
  const [data, setData] = useState<JsonDataItem[]>([]);

  // useEffect(() => {
  //   // Simula a leitura do arquivo JSON (pode ser substituído pelo carregamento real do arquivo)
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('../public/data.json');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Erro ao carregar dados JSON:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const handleClick = () => {
    alert('A funcionalidade não foi implementada.');
  };
  const addNewItem = () => {
    const newItem: JsonDataItem = {
      id: data.length + 1,
      foto: 'caminho/para/nova-foto.jpg',
      descricao: 'Nova Descrição',
    };

    setData([...data, newItem]);
  };

  const updateItem = (id: number, newDescricao: string) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, descricao: newDescricao } : item
    );

    setData(updatedData);
  };

  const deleteItem = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  
  return (
    <main>
      <Header></Header>
      <Search></Search>
      <div className='container-h1' >
        <h1 className='h1'> Resultado da Busca</h1>  
        <button className='buttonNewCard' onClick={handleClick}>Novo Card</button>
      </div>
      <Container>
        {jsonData.map((item) => (
          <Square
            key={item.id}
            onUpdate={(newDescricao) => updateItem(item.id, newDescricao)}
            onDelete={() => deleteItem(item.id)}
            {...item}
          />
        ))}
      </Container>
    </main>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
export default App;
