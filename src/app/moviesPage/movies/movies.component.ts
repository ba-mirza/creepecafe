import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {debounceTime, distinctUntilChanged, filter, fromEvent, map, Subject, takeUntil} from "rxjs";
import {InceptionResponseInterface} from "../../shared/types/inception.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  @ViewChild('movieSearchInput', {static: true}) movieSearchInput!: ElementRef
  public movies!: InceptionResponseInterface
  private destroy$: Subject<undefined> = new Subject<undefined>()

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getSomeData().pipe(takeUntil(this.destroy$)).subscribe({
      next: (m: InceptionResponseInterface): void => {
        this.movies = m
      }
    })

    this.searchMoviesByTitle();
  }

  searchMoviesByTitle(): void {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.destroy$),
        map((event: any) => {
          return event.target.value
        }),
        filter(t => t.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe({
        next: (text: string) => {
          this.api.searchGetMovie(text).subscribe({
            next: (m) => {
              this.movies = m;
            }
          })
        }
      })
  }

  goToDetails(id: string): void {
    this.router.navigate(['movie/details', id])
  }

  goToFavorites(): void {
    this.router.navigate(['favorites'])
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined)
    this.destroy$.complete()
  }
}
