import { IEvaluation } from '../interfaces/IEvaluation';
import { Question } from './Question';

export class Evaluation implements IEvaluation{
  peso = 0;
  nome = '';
  descricao = '';
  grau = 0;
  questoes = [new Question()];
}
