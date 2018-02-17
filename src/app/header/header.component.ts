import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

export interface navService{
  item: String;
  link: String;
 
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private carouselConfig: NgxCarousel;
  private carouselImages: Array<String>;
  private navItems: Array<navService>;

  constructor() {
    this.navItems = [
    {item :'HOME' ,link:'/home'},
    {item :'ABOUT US' ,link:'/home'},
    {item :'ACCOMODATION' ,link:''},
    {item :'DINING' ,link:''},
    {item :'GALLARY' ,link:'/gallary'},
    {item :'CONTACT US' ,link:''}
    ];
   }

  ngOnInit() {
    this.initImageObject();
    this.initializeCarousel();

  }

  private initImageObject = () => {
    this.carouselImages = [
      '../../assets/images/hotelFront.jpg',
      '/assets/images/hotelReception.jpg',
      '/assets/images/hotelLobby.jpg',
    ];
  }

  private carouselOnLoad = () => {
    // TODO: Decide whats going to come here !
  }

  private initializeCarousel = () => {
    this.carouselConfig = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

}
