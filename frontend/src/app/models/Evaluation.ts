import { IEvaluation } from '../interfaces/IEvaluation';

export class Evaluation implements IEvaluation{
  peso = 0;
  nome = '';
  descricao = '';
  grau = 0;
  questoes = [];
}
