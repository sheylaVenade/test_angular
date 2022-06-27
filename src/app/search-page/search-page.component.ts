import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../core/api-http.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public images = []
  search = ''
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
  }
  fillPage(page?: number): void {
    console.log(page)
    this.apiHttpService.getPage({params: { query: this.search}}).subscribe(
      (data) => {this.images = (data as any); console.log(this.images)},
      error => console.log(error)
    );
  }
}
