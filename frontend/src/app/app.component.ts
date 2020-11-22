import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Evaluation} from './interfaces/Evaluation';
import {EvaluationService} from './services/evaluation.service';
import {MatDialog} from '@angular/material/dialog';
import { Question } from './interfaces/Question';
import { QuestionsComponent } from './dialog/questions/questions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'grau', 'peso', 'descricao', 'questoes'];
  dataSource: MatTableDataSource<Evaluation>;

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
    this.evaluationService.getAllEvaluations().subscribe((data: Evaluation[]) => {
      this.dataSource.data = data;
    })
  }

  openDialog(data: Question[]) {
    console.log(data)
    this.dialog.open(QuestionsComponent, {data});
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
