import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 /* persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getpersona().subscribe(data => {this.persona = data});
  }*/
    public usuario: Usuario | undefined;
    public editUsuario: Usuario | undefined;
    
    constructor (private usuarioService: UsuarioService){ }

    ngOnInit(): void {
      this.getUser();
    }
    public getUser(): void{
      this.usuarioService.getUser().subscribe({
        next: (response: Usuario)=>{
          this.usuario=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
}
