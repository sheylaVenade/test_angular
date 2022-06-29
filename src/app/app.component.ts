import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiHttpService } from './core/services/api-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Lupita Images';
  currentYear = new Date().getFullYear();
  sidebarOpen = false;
  public langs = ['en', 'es']
  constructor(public translate: TranslateService, private apiHttpService: ApiHttpService, private route: ActivatedRoute) {
    translate.addLangs(this.langs);
    translate.setDefaultLang('en');
  }
  
  ngOnInit(): void {
    this.checkPermissions()
  }

  checkPermissions(): void {
    console.log('HOLA')
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot)
    this.route.queryParamMap
      .subscribe((params) => {
        if (params.get("code")) {
          localStorage.setItem("authorized", "true")
          this.apiHttpService.getUserToken({code: params.get("code")}).subscribe(
            (data:any) => {
              localStorage.setItem("userToken", data.access_token || '')
              localStorage.setItem("refreshToken", data.refresh_token)
            },
            error =>console.log(error)
          );
        }
      }
    );
    
  }
  translateLang(lang: string) {
    this.translate.use(lang);
  }
  
}
