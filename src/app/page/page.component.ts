import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

   interval = 6000;
  slides = [
    {'image': './assets/doctor.jpg'}, 
    {'image': '/assets/patient.png'},
    {'image': './assets/steth.jpeg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
