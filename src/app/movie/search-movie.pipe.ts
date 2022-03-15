import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'searchMovie',
})
export class SearchMoviePipe implements PipeTransform {
  transform(movies: Movie[], searchFilter: string): Movie[] {
    if (!movies || !searchFilter) {
      return movies;
    } else {
      return movies.filter((movie) =>
        movie.movieName
          .toLocaleLowerCase()
          .includes(searchFilter.toLocaleLowerCase())
      );
    }
  }
}
