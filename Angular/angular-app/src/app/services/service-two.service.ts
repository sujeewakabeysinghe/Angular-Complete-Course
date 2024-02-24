import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTwoService {

  getRooms$ = this.http.get<any>('/api/rooms').pipe(
    shareReplay(1)
  );
  errorRooms$ = this.http.get<any>('/api/rmmms').pipe( // here endpoint is incorrect
    shareReplay(1)
  );

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
