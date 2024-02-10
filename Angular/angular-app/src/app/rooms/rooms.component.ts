import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  // Interpolation
  hotelName = 'Hilton Hotel';

  // Property Binding
  noOfRooms = 100;
  hideRoomCount = false;
  hideRoomCountButtonText = 'Hide Room Count';

  // Event Binding
  hideRooms() {
    this.hideRoomCount = !this.hideRoomCount;
    this.hideRoomCountButtonText = this.hideRoomCount ? 'Show Room Count' : 'Hide Room Count';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
