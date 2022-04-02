import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localArticle: Article[] = [];

  constructor(private storage: Storage) { 
    this.init();
    //his.loadFovorites()
  }

  get getLocalArticle(){
    this._localArticle = [...this._localArticle];
    return this._localArticle;

    
    
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFovorites();
  }

  async saveRemoveArticle(article: Article){

    //fin() consigue el valor y devuelve un objeto con los valores
    const exist = this._localArticle.find(localArticle=> localArticle.title === article.title
    );

    //Si el articulo existe se borrar del array para evitar duplicados
    if(exist){
      //filter solo va a traer los titulos que sean diferente al tilulo de articulo 
      this._localArticle = this._localArticle.filter( localArticle => localArticle.title !== article.title)
      
    }else{
      this._localArticle = [article, ...this._localArticle];
    }

    this._storage.set("articles", this._localArticle);

  }

  async loadFovorites(){
    try{
      const articles = await this._storage.get('articles');
      this._localArticle = articles || [];
      //console.log('this._localArticle',this._localArticle)
    }catch (error){
      
    }
  }

  articleInFavotites(article: Article){
    return !!this._localArticle.find(localArticle =>localArticle.title === article.title)
  }

  
}

