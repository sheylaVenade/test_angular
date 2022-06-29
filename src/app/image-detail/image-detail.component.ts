import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../core/services/api-http.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  public image : any = {}
  public errorMessage = ''
  constructor(private route:ActivatedRoute, private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.apiHttpService.getPhoto(this.route.snapshot.paramMap.get('id')).subscribe(
        (data) => {
          this.image = (data as any);
        },
        error => this.errorMessage = 'DETAIL_PAGE.IMAGE_NOT_FOUND'
        );
    }
  }

}
