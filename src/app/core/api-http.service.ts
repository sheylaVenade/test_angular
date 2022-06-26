import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class ApiHttpService {
  constructor( private http: HttpClient ) {
    
  }
  public getRandom(options?: any) {
    options = Object.assign({headers: this.getHeaders()}, options);
    console.log(options)
    return this.http.get(environment.apiURL + "photos/random", options);
  }
  public getHeaders() {
    let apiHeaders = new HttpHeaders();
    apiHeaders = apiHeaders.set("Content-Type", "application/json")
      .set("Authorization", "Client-ID " + environment.token)
      .set("Accept", "application/json,text/html,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
    return apiHeaders
  }
}