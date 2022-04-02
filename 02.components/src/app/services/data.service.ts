import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Components } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  gerUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  gerMenuOpts(){
    return this.http.get<Components[]>('/assets/data/menu-opts.json');
  }

  getHeroes(){
    return this.http.get<Components[]>('/assets/data/superheroes.json').pipe(delay(1500)
      );
  }
}
