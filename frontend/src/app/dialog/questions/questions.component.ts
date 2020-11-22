import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/interfaces/Question';
import { MatCard } from '@angular/material/card'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Question[]) {}

  ngOnInit(): void {
  }

}
