import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-card',
  templateUrl: './like-card.component.html',
  styleUrls: ['./like-card.component.scss']
})
export class LikeCardComponent implements OnInit {
  @Input() img?: any;
  constructor() { }

  ngOnInit(): void {
  }
  likeImage(): void {
    this.img.liked_by_user = !this.img.liked_by_user
  }
}
