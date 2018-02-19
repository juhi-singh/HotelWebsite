import { Component, OnInit } from '@angular/core';

export interface rooms{
  image: String;
  price: Number;
  heading :String;
 
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private roomLists: Array<rooms>;
  
    constructor() { 
      this.roomLists = [
        {image :'/assets/images/conferenceRoom.jpg' ,price : 1200,heading: 'MEETING AND CONFRENCE' },
        {image :'/assets/images/conferenceRoom.jpg' ,price :1400,heading: 'WEDDING' },
       
      ]
    }
  

  ngOnInit() {
  }

}
