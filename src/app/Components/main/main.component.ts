import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
 movies: any=[];
 http = inject(HttpClient);
 
 ngOnInit(): void{
  this.loadMovie();

 }
constructor(private movieService: MovieService){}

 loadMovie(){
  this.movieService.getMovies().subscribe(
    (data: any) => {
      this.movies = data.d;
    },
    (error: any) => {
      console.error('Error fetching movies:', error);
    }
  );
}
}
