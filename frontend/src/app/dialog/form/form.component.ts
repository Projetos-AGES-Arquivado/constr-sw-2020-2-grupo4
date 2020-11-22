import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Evaluation } from '../../models/Evaluation';

@Component({
  selector: 'app-questions',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  evaluationForm: FormGroup;
  evaluation: Evaluation;

  arrayItems: {
    id: number;
    title: string;
  }[];

  constructor(private _formBuilder: FormBuilder) {
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
    console.log(this.evaluationForm.value);
  }
}
