import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiences: Experience[]=[];
  public editExperience:Experience | undefined;
  public deleteExperience: Experience | undefined;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperiences();
  }
  public getExperiences():void{
    this.experienceService.getExperience().subscribe({
      next:(Response: Experience[])=>{
        this.experiences=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
    }

}
