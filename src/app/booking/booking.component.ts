import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup
  

  constructor(private _formBuilder: FormBuilder) { 
    this.bookingForm = this._formBuilder.group({
      checkin: new FormControl(null, Validators.required),
      checkout: new FormControl(null, Validators.required),
      adults: new FormControl(null, Validators.required),
      rooms: new FormControl(null, Validators.required)
  
    });
  }

  ngOnInit() {
  }

  checkAvailability(): void {
    console.log(this.bookingForm.value);
  }

}
