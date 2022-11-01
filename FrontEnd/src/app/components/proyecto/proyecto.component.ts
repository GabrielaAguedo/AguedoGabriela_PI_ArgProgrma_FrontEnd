import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { Proyecto } from 'src/app/model/proyecto';
import { PersonaService } from 'src/app/service/persona.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];
  persona: persona = null;
  constructor(
    public personaService: PersonaService,
    private proyectoS: SProyectoService,
    private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data =>{
        this.persona = data;
      }
    )
  }
}

