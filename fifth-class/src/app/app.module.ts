import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleGalleryComponent } from './people-gallery/people-gallery.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritePeopleComponent } from './favorite-people/favorite-people.component';
@NgModule({
  declarations: [AppComponent, PeopleGalleryComponent, PersonCardComponent, FavoritePeopleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
