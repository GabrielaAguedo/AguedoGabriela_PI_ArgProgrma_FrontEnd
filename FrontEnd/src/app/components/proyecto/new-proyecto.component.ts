/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(private sProyecto: SProyectoService, 
              private router: Router,
              public imageServiceLogoP: ImageService,
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.imageServiceLogoP.clearUrl();

  }

  onCreate(): void {
    this.imgP = this.imageServiceLogoP.url;
    const proy = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event:any) {

    const namep = "imagenProy" + this.nombreP
    this.imageServiceLogoP.uploadImage($event, namep);

  }

 
}*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagePService } from 'src/app/service/image-p.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  
  nombreP: string;
  descripcionP: string;
  imgP: string;

  constructor(private sProyecto: SProyectoService, 
              private router: Router,
              public imgPS: ImagePService,
              ) { }


  ngOnInit(): void {
    
  }

  onCreate(): void {
    this.imgP = this.imgPS.url;
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
    this.sProyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
        this.imgPS.clearUrl();
      }, err => {
        alert("Fallo al añadir el proyectos");
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event:any) {
    const name = "imagenProy" + this.nombreP
    this.imgPS.uploadImageP($event, name);

  }

 
}




