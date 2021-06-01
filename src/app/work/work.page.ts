import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {

  works = [{
    area: "Poster Social",
    title: "FUERZA ECUADOR",
    description: "Diseño de cartel y aplicativos, proyecto sin fines de lucro para llamar a la cooperación frente al terremoto de 2016 en Manabí – Ecuador",
    imageUrl: "images/work1.png"
  },
    {
      area: "Diseño de Marca",
      title: "PIXEL WAVE",
      description: "Diseño de marca y desarrollo de línea gráfica corporativa para el estudio fotográfico Pixel Wave.",
      imageUrl: "images/work2.png"
    },
    {
      area: "Diseño Web",
      title: "ALKALOIDES",
      description: "Diseño de Landing Page para el lanzamiento de banda musical y promoción de su primer sencillo.",
      imageUrl: "images/work3.png"
    }]

  constructor() { }

  ngOnInit() {
  }

}
