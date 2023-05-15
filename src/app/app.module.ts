import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { MoviesTableComponent } from './moviesPage/components/movies-table/movies-table.component';
import { MovieDetailsComponent } from './moviesPage/components/movie-details/movie-details.component';
import { MoviesComponent } from './moviesPage/movies/movies.component';

import { CardModule } from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {InputTextModule} from "primeng/inputtext";
import { MessagesModule } from 'primeng/messages';

import {MessageService} from "primeng/api";
import { FavoritesListComponent } from './shared/components/favorites-list/favorites-list.component';

@NgModule({
  declarations: [AppComponent, MoviesTableComponent, MovieDetailsComponent, MoviesComponent, FavoritesListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, NgbModule, HttpClientModule, CardModule, ButtonModule, TooltipModule, InputTextModule, MessagesModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
