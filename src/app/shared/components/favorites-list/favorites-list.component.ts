import {Component, OnInit} from '@angular/core';
import {PersistenceService} from "../../services/persistence.service";
import {MovieDetailInterface} from "../../types/movieDetail.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {

  favoriteMovies!: MovieDetailInterface

  constructor(
    private persistanceService: PersistenceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favoriteMovies = this.persistanceService.getAll();
  }

  backTo(): void {
    this.router.navigate(['movies'])
  }

}
