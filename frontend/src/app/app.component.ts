import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {IEvaluation} from './interfaces/IEvaluation';
import {EvaluationService} from './services/evaluation.service';
import {MatDialog} from '@angular/material/dialog';
import { Question } from './interfaces/Question';
import { QuestionsComponent } from './dialog/questions/questions.component';
import { FormComponent } from './dialog/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'grau', 'peso', 'descricao', 'questoes'];
  dataSource: MatTableDataSource<IEvaluation>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator | null;

  constructor(private evaluationService: EvaluationService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
    this.paginator = null;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(){
    this.evaluationService.getAllEvaluations().subscribe((data: IEvaluation[]) => {
      this.dataSource.data = data;
    })
  }

  openQuestionsDialog(data: Question[]) {
    this.dialog.open(QuestionsComponent, {data});
  }

  openFormCreateDialog(){
    const ref = this.dialog.open(FormComponent);
    ref.componentInstance.emitService.subscribe((emitted: IEvaluation) => {
      const data = this.dataSource.data;
      data.push(emitted);
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
