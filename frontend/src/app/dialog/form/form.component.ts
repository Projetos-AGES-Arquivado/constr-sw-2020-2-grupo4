import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { Evaluation } from '../../models/Evaluation';

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

  constructor(private _formBuilder: FormBuilder, private evaluationService: EvaluationService) {
    this.arrayItems = [];
    this.evaluation = new Evaluation();
    this.evaluationForm = this._formBuilder.group({
      nome: [this.evaluation.nome],
      peso: [this.evaluation.peso],
      grau: [this.evaluation.grau],
      descricao: [this.evaluation.descricao],
    });
  }

  ngOnInit() {
    this.arrayItems = [];
  }

  onSubmit(){
    this.evaluationService.saveEvaluation(this.evaluationForm.value).subscribe(
      data => this.emitService.next(data),
      error => console.warn(error)
    )
  }

}
