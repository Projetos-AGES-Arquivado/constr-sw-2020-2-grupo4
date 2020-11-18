import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ClassService} from './class.service';

export interface IClass {
  numero: number;
  ano: number;
  horario: string[];
  semestre: number;
  sala: string;
  professor: string;
  disciplina: string;
  aulas: string[];
  alunos: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['numero', 'disciplina', 'professor', 'semestre', 'sala'];
  classes: IClass[] = [];
  dataSource: MatTableDataSource<IClass>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private classService: ClassService) {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
  }

  ngOnInit(){
    this.classService.getAllClasses().subscribe((data: IClass[]) => {
      console.log(data)
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
