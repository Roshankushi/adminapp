import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {
  private movieUrl = 'http://192.168.0.72:3000/api/movies'

  constructor(private http: HttpClient) { }

  movies = [];

getRemoteMovies(): Observable<[]>{
  return this.http.get<[]>(this.movieUrl); 		
}

addRemoteMovie(movie):Observable<any>{
  return this.http.post(this.movieUrl,movie);
}

deleteRemoteMovie(movie): Observable<[]>{
  return this.http.delete<[]>(this.movieUrl+'/'+movie.id);
}



getMovies(){
  return this.movies;
}

deleteMovieList(id): Observable<[]>{
  return this.http.delete<[]>(this.movieUrl+'/'+id);
}

updateRemoteMovie(movie):Observable<any>{
  return this.http.put(this.movieUrl + "/"+movie.id,movie);
}

getRemoteMovieById(id):Observable<any>{
 return this.http.get<[]>(this.movieUrl + "/"+id);
}
}
