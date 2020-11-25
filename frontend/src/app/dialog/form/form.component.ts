import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEvaluation } from 'src/app/interfaces/IEvaluation';
import { Question } from 'src/app/models/Question';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { Evaluation } from '../../models/Evaluation';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-questions',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  evaluationForm: FormGroup;
  evaluation: Evaluation;

  @Output() emitService = new EventEmitter;

  arrayItems: {
    id: number;
    title: string;
  }[];

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEvaluation,
    private _formBuilder: FormBuilder,
    private evaluationService: EvaluationService) {
    this.arrayItems = [];
    this.evaluation = new Evaluation();
    this.evaluationForm = this._formBuilder.group({
      _id: (data) ? data._id : null,
      nome: (data) ? data.nome : [this.evaluation.nome],
      peso: (data) ? data.peso : [this.evaluation.peso],
      grau: (data) ? data.grau : [this.evaluation.grau],
      descricao: (data) ? data.descricao : [this.evaluation.descricao],
      questoes: this._formBuilder.array((data) ?
        data.questoes
          .map(
            q => this._formBuilder.group(
              {
                enunciado: new FormControl(q.enunciado),
                resposta: new FormControl(q.resposta)
              }
            ))
        : [])
    });
  }

  ngOnInit() {
    this.arrayItems = [];
  }

  onSubmit() {
    const data = this.evaluationForm.value;
    if (data._id) {
      this.evaluationService.patchEvaluation(this.evaluationForm.value).subscribe(
        data => this.emitService.next(data),
        error => console.warn(error)
      )
    }
    else {
      this.evaluationService.saveEvaluation(this.evaluationForm.value).subscribe(
        data => this.emitService.next(data),
        error => console.warn(error)
      )
    }
  }

  questoes(): FormArray {
    return this.evaluationForm.get('questoes') as FormArray;
  }

  removeQuestion(index: number) {
    this.questoes().removeAt(index)
  }

  _newQuestion(): FormGroup {
    return this._formBuilder.group(new Question());
  }

  addQuestion(): void {
    this.questoes().push(this._newQuestion());
  }

  closeForm(): void {
    this.dialogRef.close();
  }

}
