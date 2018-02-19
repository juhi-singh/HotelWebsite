import { Component, OnInit } from '@angular/core';

export interface rooms{
  image: String;
  price: Number;
  heading :String;
 
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  private roomLists: Array<rooms>;

  constructor() { 
    this.roomLists = [
      {image :'/assets/images/hotelLobby.jpg' ,price : 1200,heading: 'CLUB ROOM' },
      {image :'/assets/images/conferenceRoom.jpg' ,price :1400,heading: 'DULEX ROOM' },
      {image :'/assets/images/resturant.jpg' ,price : 1700, heading: 'EXECUTIVE ROOM' },
      {image :'/assets/images/resturant.jpg' ,price : 2000, heading: 'TAJ SUITS' },
      {image :'/assets/images/resturant.jpg' ,price :2500 ,heading: 'KOHINOOR SUITS' }
    ]
  }

  ngOnInit() {
  }

}
