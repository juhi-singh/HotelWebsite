import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  lat: number = 24.777097;
  lng: number = 84.338802;
  zoomLevel: number = 15;
  constructor() { }

  ngOnInit() {
  }

}
