import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  room: any = {
    roomType: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addRooms() {
    console.log(this.room);
  }

}
