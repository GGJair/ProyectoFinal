import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Proyect } from 'src/app/model/proyect';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public proyects: Proyect[]=[];
  public editProyect:Proyect | undefined;
  public deleteProyect: Proyect | undefined;

  constructor(private proyectService: ProyectService) { }

  ngOnInit(): void {
    this.getProyects();
  }
  public getProyects():void{
    this.proyectService.getProyect().subscribe({
      next:(Response: Proyect[])=>{
        this.proyects=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
    }

}
