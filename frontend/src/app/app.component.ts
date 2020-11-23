import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {IEvaluation} from './interfaces/IEvaluation';
import {EvaluationService} from './services/evaluation.service';
import {MatDialog} from '@angular/material/dialog';
import { IQuestion } from './interfaces/IQuestion';
import { QuestionsComponent } from './dialog/questions/questions.component';
import { FormComponent } from './dialog/form/form.component';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component';

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

  openQuestionsDialog(data: IQuestion[]) {
    this.dialog.open(QuestionsComponent, {data});
  }

  openCreateFormDialog(){
    const ref = this.dialog.open(FormComponent);
    ref.componentInstance.emitService.subscribe((emitted: IEvaluation) => {
      this._updateFrontend(emitted);
      ref.close();
    })
  }

  openEditFormDialog(data: IEvaluation){
    const ref = this.dialog.open(FormComponent, {data});
    ref.componentInstance.emitService.subscribe((emitted: IEvaluation) => {
      this._updateFrontend(emitted)
      ref.close();
    })
  }

  openDeleteDialog(data: string){
    const ref = this.dialog.open(ConfirmDeleteComponent, {data});
    ref.componentInstance.emitService.subscribe((emitted: string) => {
      this._updateFrontendOnDelete(emitted);
      ref.close();
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  _updateFrontend(emitted: IEvaluation): void{
    const data = this.dataSource.data;
    const index = data.findIndex(e => e._id === emitted._id);
    if(index >= 0){
      data[index] = emitted;
    }
    else data.push(emitted);
    this.dataSource.data = data;
  }

  _updateFrontendOnDelete(emitted: string): void{
    const data = this.dataSource.data;
    const index = data.findIndex(e => e._id === emitted);
    if(index >= 0) data.splice(index, 1);
    this.dataSource.data = data;
  }

}
