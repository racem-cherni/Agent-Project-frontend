import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  private baseUrluser = 'http://localhost:8081/api/v1';

  public getAllAgents(): Observable<Agent[]> {

    return this.http.get<Agent[]>(this.baseUrluser +'/agents',);
  
  }
}
