import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'gtn-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  email: string = '';
  password: string = '';

  room: any = {
    roomType: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addRooms(addRoomsForm: NgForm) {
    console.log(this.room);
    // addRoomsForm.reset(); // reset to a fresh form which everything is empty
    addRoomsForm.resetForm({
      roomType: 'Default Data'
    });
  }

  login() {
    if(this.email === 'email.com' && this.password === 'pass') {
      alert('Matched!')
    }
  }

}
