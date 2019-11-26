import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, } from '@angular/material';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { EditComponent } from './edit/edit.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ViewComponent,
    HomePageComponent,
    EditComponent,
    ArtistPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
