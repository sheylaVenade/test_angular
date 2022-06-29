import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class ApiHttpService {
  constructor( private http: HttpClient ) {
    
  }
  public getRandom(options?: any) {
    options = Object.assign({headers: this.getHeaders()}, options);
    return this.http.get(environment.apiURL + "photos/random", options);
  }
  public getPhoto(id:any) {
    let options = {headers: this.getHeaders()};
    return this.http.get(environment.apiURL + "photos/" + id, options);
  }

  public getPage(options?: any) {
    options = Object.assign({headers: this.getHeaders()}, options);
    return this.http.get(environment.apiURL + "search/photos", options);
  }
  public likeImage(image?: any) {
    let options = { headers: this.getHeaders() };
    let url = `/photos/${image.id}/like`
    if (image.liked_by_user) {
      return this.http.delete(environment.apiURL + url, options);
    } else {
      return this.http.post(environment.apiURL + url, options);
    }
  }
  public getHeaders() {
    let apiHeaders = new HttpHeaders();
    apiHeaders = apiHeaders.set("Content-Type", "application/json")
      .set("Authorization", "Client-ID " + environment.token)
      .set("Accept", "application/json,text/html,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
    return apiHeaders
  }
}