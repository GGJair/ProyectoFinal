import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyect } from '../model/proyect';


@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getProyect():Observable<Proyect[]>{
    return this.http.get<Proyect[]>(`${this.apiServerUrl}/proyecto/all`);

  }
  public addProyect(proyecto: Proyect):Observable<Proyect>{
    return this.http.post<Proyect>(`${this.apiServerUrl}/proyecto/add`, proyecto);
  }
  public updateProyect(proyecto: Proyect):Observable<Proyect>{
    return this.http.put<Proyect>(`${this.apiServerUrl}/proyecto/update`,proyecto);
  }
  public deleteProyect(proyectoId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/proyecto/delete/${proyectoId}`);
  }
}
