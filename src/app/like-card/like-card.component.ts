import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiHttpService } from '../core/services/api-http.service';

@Component({
  selector: 'app-like-card',
  templateUrl: './like-card.component.html',
  styleUrls: ['./like-card.component.scss']
})
export class LikeCardComponent implements OnInit {
  @Input() img?: any;
  public logged = false
  @Output()
  cardClick: EventEmitter<any> = new EventEmitter<any>()
  constructor(private apiHttpService: ApiHttpService) { }

  ngOnInit(): void {
    if (localStorage.getItem("userToken")) { this.logged = true }
  }

  likeImage(): void {
    
    this.apiHttpService.likeImage(this.img).subscribe(
      (data) => { this.img.liked_by_user = !this.img.liked_by_user },
      error => console.log(error)
    );
  }
  emitClick(): void {
    this.cardClick.emit(this.img);
  }
}
