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
  constructor(public translate: TranslateService, private apiHttpService: ApiHttpService) {
    // Register translation languages
    translate.addLangs(['en', 'es', 'gl']);
    // Set default language
    translate.setDefaultLang('en');
    //this.showConfig();
  }
  
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
  getConfig() {
    return this.apiHttpService.getRandom();
  }
  showConfig() {
    this.getConfig()
      .subscribe(
        (data) => console.log(data), // success path
        error =>console.log(error) // error path
      );
  }
}
