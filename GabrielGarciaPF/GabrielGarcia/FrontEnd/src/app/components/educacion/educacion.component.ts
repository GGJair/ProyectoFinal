import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educations: Education[]=[];
  public editEducation:Education | undefined;
  public deleteEducation: Education | undefined;

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }
  public getEducations():void{
    this.educationService.getEducation().subscribe({
      next:(Response: Education[])=>{
        this.educations=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
    }

    public onOpenModal(mode:String, education?:Education):void{
     const container=document.getElementById('main-container');
     const button=document.createElement('button');
     button.style.display='none';
     button.setAttribute('data-toggle','modal');
     if(mode==='add'){
      button.setAttribute('data-target','#addEducationModal');

     }
     else if (mode==='delete'){
      this.deleteEducation=education;
      button.setAttribute('data-target','#deleteEducationModal');
     }
     else if (mode==='edit'){
      this.editEducation=education;
      button.setAttribute('data-target','#editEducationModal');
     }
     container?.appendChild(button);
     button.click();


    }
    public onAddEducation(addForm: NgForm){
      document.getElementById('add-education-form')?.click();
      this.educationService.addEducation(addForm.value).subscribe({
        next: (Response:Education)=>{
          console.log(Response);
          this.getEducations();
          addForm.reset();
        },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
      
      })
    }
    public onUpdateEducation(education: Education){
      this.editEducation=education;
      document.getElementById('add-education-form')?.click();
      this.educationService.updateEducation(education).subscribe({
        next: (Response:Education)=>{
          console.log(Response);
          this.getEducations();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
       }
     })
    }
    public onDeleteEducation(idEdu: number):void{
      
      this.educationService.deleteEducation(idEdu).subscribe({
        next: (Response:void)=>{
          console.log(Response);
          this.getEducations();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
       }
     })
    }
  }

