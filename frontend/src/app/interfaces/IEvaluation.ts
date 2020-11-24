import { IQuestion } from './IQuestion';

export interface IEvaluation {
  peso: number;
  _id?: string;
  nome: string;
  grau: number;
  descricao: string;
  questoes: IQuestion[];
  __v?: number;
}
