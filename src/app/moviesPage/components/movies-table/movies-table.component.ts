import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InceptionResponseInterface} from "../../../shared/types/inception.interface";
import {PersistenceService} from "../../../shared/services/persistence.service";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent {
  @Input('movies') moviesProps?: InceptionResponseInterface;
  @Input('favoriteMovies') favoriteMoviesProps?: any;
  @Output() details: EventEmitter<string> = new EventEmitter<string>()

  constructor(private persistanceService: PersistenceService) {}

  openDetails(id: string): void {
    this.details.emit(id);
  }

  deleteFromFavorites(key: string): void {
    this.persistanceService.delete(key)
    location.reload();
  }
}
