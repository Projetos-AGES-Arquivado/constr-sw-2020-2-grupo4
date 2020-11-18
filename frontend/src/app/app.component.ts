import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Evaluation} from './interfaces/Evaluation';
import {EvaluationService} from './services/evaluation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['numero', 'disciplina', 'professor', 'semestre', 'sala'];
  dataSource: MatTableDataSource<Evaluation>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator | null;

  constructor(private evaluationService: EvaluationService) {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
    this.paginator = null;
  }

  ngOnInit(){
    this.evaluationService.getAllEvaluations().subscribe((data: Evaluation[]) => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
