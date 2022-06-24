import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
