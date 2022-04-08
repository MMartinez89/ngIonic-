import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetail } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  movies: MovieDetail[] = [];
  genres:Genre[] = [];

  genreMovies:any[]= [];
  pelicula:any[] = [];
  aqui:any[]=[];


  constructor(private dataLocal: DataLocalService, private moviesService: MoviesService) {}

  async ngOnInit() {
   
  }

  async ionViewWillEnter(){
   
    this.movies = await this.dataLocal.upLoadFavorite()
    this.genres = await this.moviesService.uploadGenre();

    this.moviesForGenre(this.genres, this.movies);
  }

   moviesForGenre(genres: any, movies: any){
    this.genreMovies = [];
        

    genres.forEach(genre=>{
      this.genreMovies.push({
        genre: genre.name,
        movie: movies.filter(peli=>{
          return peli.genres.find(genero=> genero.id === genre.id);
        })
      })
    });
    console.log('prueba', this.genreMovies)
    
  }


}
