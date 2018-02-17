import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private carouselConfig: NgxCarousel;
  private carouselImages: Array<String>;
  private navItems: Array<String>;

  constructor() {
    this.navItems = ['HOME', 'ABOUT US', 'ACCOMODATION', 'DINING', 'GALLARY', 'CONTACT US'];
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
