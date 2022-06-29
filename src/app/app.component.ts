import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiHttpService } from './core/api-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lupita Images';
  currentYear = new Date().getFullYear();
  sidebarOpen = false;
  public langs = ['en', 'es']
  constructor(public translate: TranslateService, private apiHttpService: ApiHttpService) {
    translate.addLangs(this.langs);
    translate.setDefaultLang('en');
  }
  
  translateLang(lang: string) {
    this.translate.use(lang);
  }
  
}
