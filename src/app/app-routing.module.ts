import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./moviesPage/movies/movies.component";
import {MovieDetailsComponent} from "./moviesPage/components/movie-details/movie-details.component";
import {FavoritesListComponent} from "./shared/components/favorites-list/favorites-list.component";

const routes: Routes = [
  {path: "", redirectTo: "/movies", pathMatch: "full"},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/details/:id', component: MovieDetailsComponent},
  {path: 'favorites', component: FavoritesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
