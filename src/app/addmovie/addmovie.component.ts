import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MovieService from '../movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {

  movie = {name:'', year:'', image_url:'', production_house:'',rating:'',type:'',language:'',date:''};

  constructor(private movieService: MovieService, private router:Router) { }

  ngOnInit() {
  }

  addMovie(){

    console.log(this.movie);

  	this.movieService.addRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/movie']);});
  }

 
  
  navigateToMovie(){
    this.router.navigate(['/movie']);
  }
  onBack(){
  	this.router.navigate(['/movie']);
  }
}
