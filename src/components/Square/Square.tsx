import React, { useState } from 'react';
import { ISquareProps } from './ISquareProps.js';
import styled from 'styled-components';

const ResultSquare: React.FC<ISquareProps> = ({
  id,
  foto,
  descricao,
  onUpdate,
  onDelete,
}) => {
  const [newDescricao, setNewDescricao] = useState(descricao);

  const handleUpdate = () => {
    onUpdate(newDescricao);
  };

  return (
    <Container>
        <div key={id} className="quadrado">
          <img src={foto} />
          <div className="descricao">{descricao}</div>
          <div className="botoes">
            <button className="botao">Editar</button>
            <button className="botao botao-excluir">Excluir</button>
          </div>
        </div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
`;

export default ResultSquare;



// import React, { useState } from 'react';
// import {Container} from './styles.js';
// import { ISquareProps } from './ISquareProps.js';
// import './ISquareProps.js';

// export default (props: ISquareProps) => {
//     const {id, foto, descricao} = props;
//     const [newDescricao, setNewDescricao] = useState(descricao);

//     // const handleUpdate = () => {
//     //     onUpdate(newDescricao);
//     // };
//     // const addNewItem = () => {
//     //     const newItem = {
//     //       id: data.length + 1,
//     //       foto: "caminho/para/nova-foto.jpg",
//     //       descricao: "Nova Descrição",
//     //     };
    
//     //     setData([...data, newItem]);
//     //   };
    
//     //   const updateItem = (id, newDescricao) => {
//     //     const updatedData = data.map(item =>
//     //       item.id === id ? { ...item, descricao: newDescricao } : item
//     //     );
    
//     //     setData(updatedData);
//     //   };
    
//     //   const deleteItem = (id) => {
//     //     const updatedData = data.filter(item => item.id !== id);
//     //     setData(updatedData);
//     //   };

//   return (
//     <Container>
//       <img src={foto} alt={`Foto ${id}`} />
//       <p>{descricao}</p>
//       <input
//         type="text"
//         value={newDescricao}
//         onChange={(e) => setNewDescricao(e.target.value)}
//       />
//       {/* <button onClick={handleUpdate}>Atualizar Descrição</button>
//       <button onClick={onDelete}>Excluir</button> */}
//     </Container>



//   );
// };
