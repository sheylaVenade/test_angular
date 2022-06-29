import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


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

  public getUserToken(data:any) {
    data = Object.assign(data, {client_id: environment.token, client_secret: environment.secret, grant_type: "authorization_code", redirect_uri: environment.frontUrl})
    let options = data;
    let url = 'oauth/token'
    return this.http.post(environment.unsplashURL + url, options);
  }

  public likeImage(image?: any) {
    let headers = this.getHeaders().set("Authorization", "Bearer " + localStorage.getItem("userToken"))
    let options = { headers: headers };
    let url = `photos/${image.id}/like`
    if (image.liked_by_user) {
      return this.http.delete(environment.apiURL + url,  options);
    } else {
      return this.http.post(environment.apiURL + url, {}, options);
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