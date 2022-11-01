import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skills[]=[];
  public editSkill:Skills | undefined;
  public deleteSkill: Skills | undefined;

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }
  public getSkills():void{
    this.skillsService.getSkills().subscribe({
      next:(Response: Skills[])=>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      
    }

}
