import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../core/api-http.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public images : any[] = [];
  public isLoading = false;
  search = '';
  currentPage = 1;
  totalPages = 0;
  maxImages = 20;
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
  }

  onScroll () {
    if (this.currentPage < this.totalPages && this.images.length < this.maxImages) {
      this.fillPage(this.currentPage + 1);
    } else {
      
    }
  }
  cleanReload () {
    this.images = []
    this.fillPage(this.currentPage + 1)
  }
  fillPage(page?: number): void {
    if (this.search) {
      console.log(page);
      this.isLoading = true
      this.currentPage = page || 1
      if (this.currentPage == 1)  { this.images = []; }
      this.apiHttpService.getPage({params: { per_page: 12, page: this.currentPage, query: this.search}}).subscribe(
        (data) => {
          this.totalPages = (data as any).total_pages;
          this.images = this.images.concat((data as any).results);
          this.isLoading = false;
        },
        error => { console.log(error); this.isLoading = false }
      )
    }
  }
}
