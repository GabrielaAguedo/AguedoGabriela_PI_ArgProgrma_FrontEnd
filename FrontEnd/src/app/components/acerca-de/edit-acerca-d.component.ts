import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-d',
  templateUrl: './edit-acerca-d.component.html',
  styleUrls: ['./edit-acerca-d.component.css']
})
export class EditAcercaDComponent implements OnInit {
  persona: persona = null;
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    if(this.imageService.url = "") {
      this.imageService.clearUrl();
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.imgPerfil = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
        this.imageService.clearUrl();
      }, err => {
        alert("Error al modificar el Perfil");
        this.router.navigate(['']);
      }
    )
  }
  

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
