import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiHttpService } from './core/services/api-http.service';
import { LikeCardComponent } from './like-card/like-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AuthGuard } from './core/services/nav-gard';
import { LoginPageComponent } from './login-page/login-page.component';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    PageNotFoundComponent,
    LikeCardComponent,
    SidebarComponent,
    ImageDetailComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [ApiHttpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
