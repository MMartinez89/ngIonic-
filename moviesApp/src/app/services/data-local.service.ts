import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MovieDetail } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];
  private _storage: Storage | null = null;

  constructor( private storage:Storage, private toastController: ToastController ) { 
    this.initDB();
    this.upLoadFavorite();
  }

  async presentToast(message){
    const toast = await this.toastController.create({
      message: message,
      duration: 1500
    });

    toast.present();
  }

 

  async initDB(){
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  saveMovie(movie: MovieDetail){

    let exist: boolean = false;
    let mensaje:string ='';
    let movieExist = this.movies.find(peli =>{
      if( peli.id === movie.id ){
        exist = true;
        return;
        
      }
    })

    /*for(let peli of this.movies){
      if(peli === movie){
        exist = true;
        break;
      }
    }*/

    if(exist){
      this.movies = this.movies.filter( peli=> peli.id !== movie.id );
      mensaje = `Removido de favoritos`;    
    }else{
      this.movies.push(movie);
      mensaje = `Agregadas a Favoritos`;
    }
   
    
    this.storage.set('Peliculas', this.movies);
    this.presentToast(mensaje);

    return !exist;
  }

  async upLoadFavorite(){
    const movies = await this.storage.get('Peliculas');
    this.movies = movies || [];
    return this.movies;
  }

  async existMovie(id){
    id = Number(id);

    await this.upLoadFavorite();
    const exist = this.movies.find( peli => peli.id === id);
    return (exist) ? true : false;
  }
}
