import { Component, OnInit } from '@angular/core';


export interface services{
  image: String;
  description: String;
  heading :String;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private serviceList: Array<services>;

  constructor() {
    this.serviceList = [
      {image :'/assets/images/hotelLobby.jpg' ,description :'Vaishnavi Heights has iconic building with gracious interiors invoking an inviting, exciting ambiance and offering a holistic' ,
       heading: 'Rooms'},
      {image :'/assets/images/conferenceRoom.jpg' ,description :'Vaishnavi Heights has iconic building with gracious interiors invoking an inviting, exciting ambiance and offering a holistic' ,
      heading: 'Confrence & Banquet Hall'},
      {image :'/assets/images/resturant.jpg' ,description :'Vaishnavi Heights has iconic building with gracious interiors invoking an inviting, exciting ambiance and offering a holistic' ,
      heading: 'Resturant'}
    ]
   }

  ngOnInit() {
  }

}
