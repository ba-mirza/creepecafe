import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {MovieDetailInterface} from "../../../shared/types/movieDetail.interface";
import {PersistenceService} from "../../../shared/services/persistence.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movieDetail$!: Observable<MovieDetailInterface>
  private destroy$: Subject<undefined> = new Subject<undefined>()

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private persistenceService: PersistenceService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initGetMovieDetails()
  }

  initGetMovieDetails(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe({
      next: (params: Params) => {
        this.movieDetail$ = this.apiService.getMovieById(params['id'])
      }
    })
  }

  addToFavorites(movie: Observable<MovieDetailInterface>): void {
    movie.pipe(takeUntil(this.destroy$)).subscribe({
      next: (md: MovieDetailInterface) => {
        this.persistenceService.set(md.Title, md)
      }
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added to Favorites' })
  }

  backTo(): void {
    this.router.navigate(['movies'])
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined)
    this.destroy$.complete()
  }

}
