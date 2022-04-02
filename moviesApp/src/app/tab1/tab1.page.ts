import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  resentMovie:Movie[] = [];
  populars:Movie[] = [];


  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {

    //this.moviesService.getFeature().subscribe(console.log);
    this.moviesService.getFeature().subscribe((res)=>{
      //console.log(res);
      this.resentMovie = res.results;
    });

    this.getPopulars();
   
  }

  cargarMas(){
    this.getPopulars();

  }

  getPopulars(){
    this.moviesService.getPopular().subscribe((res1)=>{
     // console.log('Popilarity',res1);

     const arrTemporal = [...this.populars, ...res1.results];
     this.populars = arrTemporal;
    })
  }

}
