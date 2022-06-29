import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../core/api-http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public img : any = {}
  public todayImage : any
  constructor(private apiHttpService: ApiHttpService) {
    
  }

  ngOnInit(): void {
    this.todayImage = JSON.parse(localStorage.getItem('todayImage')||'{}')
    if (this.todayImage.image) {
      if (new Date().getDate() <= new Date(this.todayImage.date).getDate()) {
        this.apiHttpService.getPhoto(this.todayImage.image).subscribe(
          (data) => {
            this.img = (data as any);
          },
          error =>console.log(error)
        );
        return
      } else {
        localStorage.removeItem('todayImage')
      }
    }
    this.apiHttpService.getRandom().subscribe(
      (data) => this.img = (data as any),
      error =>console.log(error)
    );
    
  }
  saveImage(): void {
    if (this.todayImage.image) {
      localStorage.removeItem('todayImage')
      this.todayImage = {}
      this.apiHttpService.getRandom().subscribe(
        (data) => this.img = (data as any),
        error =>console.log(error)
      );
    } else {
      let imageToSave = { image: this.img.id, date: new Date() }
      localStorage.setItem('todayImage', JSON.stringify(imageToSave))
      this.todayImage = imageToSave
    }
  }

}
