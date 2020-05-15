import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server = "http://92.222.69.104/";

  constructor(private http:HttpClient) { 

  }

  donneScientifiques():Observable<any>{
    return this.http.get(this.server+"/personnes/all");
  }
}
