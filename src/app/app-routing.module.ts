import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ImageDetailComponent } from './image-detail/image-detail.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthGuard } from './core/services/nav-gard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate : [AuthGuard] },
  { path: 'search', component: SearchPageComponent, canActivate : [AuthGuard] },
  { path: 'detail/:id', component: ImageDetailComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
