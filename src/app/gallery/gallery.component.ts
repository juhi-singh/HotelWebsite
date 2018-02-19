import { Component, OnInit } from '@angular/core';

export interface imageInterface {
  image : String;
 }

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {

  private imageList: Array<imageInterface>;

  constructor() {
    this.imageList = [
      {
        image: '/assets/images/weddingHall.jpg',
      },
      {
        image: '/assets/images/conferenceRoom.jpg',
      },
      {
        image: '/assets/images/hotelLobby.jpg',
      },
      {
        image: '/assets/images/hotelFront.jpg',
      },
      {
        image: '/assets/images/hotelReception.jpg',
      },
      {
        image: '/assets/images/resturant.jpg',
      },
      {
        image: '/assets/images/weddingHall.jpg',
      },
      {
        image: '/assets/images/hotelReception.jpg',
      },
      {
        image: '/assets/images/hotelReception.jpg',
      }

    ];
   }

  ngOnInit() {
  }

}
