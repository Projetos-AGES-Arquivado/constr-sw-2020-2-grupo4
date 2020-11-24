import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvaluation } from '../interfaces/IEvaluation';

@Injectable({providedIn: 'root'})

export class EvaluationService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://ec2-52-67-129-68.sa-east-1.compute.amazonaws.com:8000/api/v1';
  }

  getAllEvaluations(): Observable<IEvaluation[]>{
    return this.http.get<IEvaluation[]>(`${this.baseUrl}/avaliacoes`)
  }

  saveEvaluation(data: IEvaluation){
    return this.http.post<IEvaluation>(`${this.baseUrl}/avaliacoes`, data)
  }

  patchEvaluation(data: IEvaluation){
    return this.http.patch<IEvaluation>(`${this.baseUrl}/avaliacoes/${data._id}`, data)
  }

  deleteEvaluation(id: string){
    return this.http.delete(`${this.baseUrl}/avaliacoes/${id}`);
  }

}
