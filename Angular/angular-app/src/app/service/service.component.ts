import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../services/service-one.service';
import { InterfaceFor } from '../directives/interface';
import { ServiceTwoService } from '../services/service-two.service';

@Component({
  selector: 'gtn-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  // providers: [ServiceOneService] you can add this if you need couple of instance in your components. nomally this is singleton and use only one global instance, rarely does like this
})
export class ServiceComponent implements OnInit {

  serviceOneItems!: InterfaceFor[];
  roomsList: any;

  constructor(
    private serviceOne: ServiceOneService, // nomally this make private, and do not make it public to access to directly to the html
    private serviceTwo: ServiceTwoService
  ) { }

  ngOnInit(): void {
    this.serviceOneItems = this.serviceOne.getServiceOneData();
    // this.serviceTwo.getRooms().subscribe( room => {
    //   this.roomsList = room;
    // });
    console.log(this.roomsList);
    console.log(this.serviceTwo.getRooms());

    this.serviceTwo.getRooms$.subscribe( room => {
      this.roomsList = room;
    });
  }

  addRoom() {
    const room = {
      roomType: 'Add Room',
    };
    this.serviceTwo.addRooms(room).subscribe( room => {
      this.roomsList = room;
    });
  }

  editRoom() {
    const room = {
      roomNumber: '1',
      roomType: 'Edit Room'
    };
    this.serviceTwo.editRooms(room).subscribe( room => {
      this.roomsList = room;
    });
  }
  
  deleteRoom() {
    const room = {
      roomNumber: '1',
      roomType: 'Edit Room'
    }; 
    this.serviceTwo.deleteRooms(room.roomNumber).subscribe( room => {
      this.roomsList = room;
    });
  }
}
