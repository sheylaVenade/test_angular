import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';
  constructor(public translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['en', 'es', 'gl']);
    // Set default language
    translate.setDefaultLang('en');
  }
  
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
