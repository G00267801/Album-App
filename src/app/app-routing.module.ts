import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component'
import {ViewComponent} from './view/view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
const routes: Routes = [
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },

  {
    path: 'artist',
    component: ArtistPageComponent
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }