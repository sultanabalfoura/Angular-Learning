import { MovieService } from './movie.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MovieApp';
  // MovieService = inject(MovieService);

  // movieData = null;

  // getMovie(){
  //   this.MovieService.getMovie.subscribe((data)=> {
  //     this.movieData =data;
  //   })
  // }
}
