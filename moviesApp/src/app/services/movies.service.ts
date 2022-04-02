import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMDB, MovieDetail, ResponseCredits } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const url:string = environment.url;
const apiKey: string =  environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularsPage = 0;
  
  constructor( private htt: HttpClient) { }

  getFeature(){

    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth()+ 1;

    let mothString;

    if(month < 10){
      mothString = '0' + month;
    }else{
      mothString = month;
    }

    const start = `${today.getUTCFullYear()}-${mothString}-01`;
    const final = `${today.getUTCFullYear()}-${mothString}-${lastDay}`;

    return this.htt.get<ResponseMDB>(`${url}/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${final}&api_key=${apiKey}&language=es&include_image_language=es`)
  }

  getPopular(){
    this.popularsPage ++;
    return this.htt.get<ResponseMDB>(`${url}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=es&include_image_language=es&page=${this.popularsPage}`);
  }

  getDeatilMovie( id:string ){
    return this.htt.get<MovieDetail>(`${url}/movie/${id}?api_key=${apiKey}&language=es&include_image_language=es&page=${this.popularsPage}`);
  }
  
  getActor( id: string){
    return this.htt.get<ResponseCredits>(`${url}/movie/${id}/credits?api_key=${apiKey}&language=es&include_image_language=es&page=${this.popularsPage}`);
  }
}
