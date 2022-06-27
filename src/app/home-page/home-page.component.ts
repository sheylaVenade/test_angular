import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../core/api-http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public img : any = {}
  constructor(private apiHttpService: ApiHttpService) {
    
  }

  ngOnInit(): void {
    this.apiHttpService.getRandom().subscribe(
      (data) => this.img = (data as any), // success path
      error =>console.log(error) // error path
    );
  }

}
