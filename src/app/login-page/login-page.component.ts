import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public envVars = environment
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  enterAsGuess(): void {
    localStorage.setItem('authorized', 'true')
    this.router.navigateByUrl('/home')
  }
}
