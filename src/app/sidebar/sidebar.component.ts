import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  pages = [
    {name: 'HOME', url: '/home', icon: 'fa-solid fa-house-chimney'},
    {name: 'SEARCH', url: '/search', icon: 'fa-solid fa-magnifying-glass'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
