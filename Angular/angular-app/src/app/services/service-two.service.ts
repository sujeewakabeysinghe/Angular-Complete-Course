import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTwoService {

  constructor(
    private http : HttpClient
  ) { }

  getRooms() {
    return this.http.get<any>('/api/rooms');
  }
  
  addRooms(room: any) {
    return this.http.post<any>('/api/rooms', room);
  }

  editRooms(room: any) {
    return this.http.put<any>(`/api/rooms/${room.roomNumber}`, room);
  }
  
  deleteRooms(id: any) {
    return this.http.delete<any>(`/api/rooms/${id}`);
  }
}
