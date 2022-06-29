import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output()
  close: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  pages = [
    {name: 'HOME', url: '/home', icon: 'fa-solid fa-house-chimney'},
    {name: 'SEARCH', url: '/search', icon: 'fa-solid fa-magnifying-glass'}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  emitClose(): void {
    this.close.emit(true)
  }
  navigate(url:String): void {
    this.router.navigate([url]);
    this.close.emit(true)
  }

}
