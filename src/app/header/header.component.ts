import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import {MatMenu} from '@angular/material/menu';
import { Router } from '@angular/router';

export interface NavService {
  item: String;
  link: String;
  hasMoreItems? : Boolean;
  firstLevelItems? : Array<NavService>;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private carouselImages: Array<String>;
  private navItems: Array<NavService>;
  private carouselConfig: NgxCarousel;

  constructor( private _router: Router) {
    this.navItems = [
    { item : 'HOME', link: '/home' },
    { item : 'ABOUT US', link: '/home' },
    { item : 'ACCOMODATION', link: '',  hasMoreItems: true ,  
      firstLevelItems: [
        {
          item: 'CLUB ROOMS',
          link: ''
        },
        {
          item: 'DELUX ROOMS',
          link: ''
        },
        {
          item: 'EXECUTIVE ROOMS',
          link: ''
        },
        {
          item: 'TAJ SUITS',
          link: ''
        },
        {
          item: 'KOHINOOR SUITS',
          link: ''
        }
      ]
    },
    { item : 'EVENTS', link: '', hasMoreItems: true ,
      firstLevelItems: [
      {
        item: 'MEETINGS',
        link: ''
      },
      {
        item: 'WEDDING',
        link: ''
      }
    ]
    },
    { item : 'DINING', link: '' },
    { item : 'GALLERY', link: '/gallery' },
    { item : 'CONTACT US', link: '' }
    ];
   }

  ngOnInit() {
    console.log(this._router.url, 'here');
    this.initCarouselObjects();
  }

  private initCarouselObjects = () => {
    this.carouselImages = [
      '../../assets/images/hotelFront.jpg',
      '/assets/images/hotelReception.jpg',
      '/assets/images/hotelLobby.jpg',
    ];
    this.carouselConfig = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      loop: true,
      touch: true
    };
  }

  private carouselOnLoad = () => {
    // TODO: Decide whats going to come here !
  }

}
