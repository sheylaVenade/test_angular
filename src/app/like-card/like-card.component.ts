import { Component, OnInit, Input } from '@angular/core';
import { ApiHttpService } from '../core/api-http.service';

@Component({
  selector: 'app-like-card',
  templateUrl: './like-card.component.html',
  styleUrls: ['./like-card.component.scss']
})
export class LikeCardComponent implements OnInit {
  @Input() img?: any;
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
  }
  likeImage(): void {
    
    this.apiHttpService.likeImage(this.img).subscribe(
      (data) => { this.img.liked_by_user = !this.img.liked_by_user },
      error => console.log(error)
    );
  }
}
