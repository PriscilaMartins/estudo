
export interface ISquareProps {
  id: number;
  foto: string;
  descricao: string;
  onUpdate: (newDescricao: string) => void;
  onDelete: () => void;
  }
  