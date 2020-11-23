import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IQuestion } from 'src/app/interfaces/IQuestion';
import { MatCard } from '@angular/material/card'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IQuestion[]) {}

  ngOnInit(): void {
  }

}
