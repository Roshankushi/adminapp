import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  movie_date = '';
  movies = this.movieService.getMovies();
  constructor(private router:Router, private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }

  deleteMovieList(m){
    this.movieService.deleteMovieList(m).subscribe((e)=>{
      this.movieService.getRemoteMovies().subscribe((result)=> {
      this.movies= result;
    });
  });
  
  
  }




  slideDidLoad(slides){
    slides.startAutoplay();
      }
onImage(){
this.router.navigate(['/payment']);
}
onBooking(){
  this.router.navigate(['/booking']);
}

onAdd(){
  this.router.navigate(['/addmovie']);
}

editMovie(movie){
    console.log("id" + movie.id);
    this.router.navigate(['/edit-movie/'+movie.id]);
     
    
  }

  onBack(){
  	this.router.navigate(['/login']);
  }

}
