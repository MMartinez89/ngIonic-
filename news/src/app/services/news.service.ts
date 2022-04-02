import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewResponse, Article, ArticleBYCategoryAndPage } from '../interfaces';
import { Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {storedArticlesByCategory} from '../data/mock-news';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class NewsService {



  //private articleBYCategoryAndPage: ArticleBYCategoryAndPage ={};
  private articleBYCategoryAndPage: any = storedArticlesByCategory;

  constructor(private http: HttpClient) { }

  private executeQuery<T>( endpoint: string ) {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${ apiUrl }${ endpoint }`, {
      params: {
        apiKey:apiKey,
        country: 'us',
      }
    });
   }

   getTopHeadlines():Observable<Article[]>{
 
    return this.getTopHeadLinesByCategory('business')
    /*return this.executeQuery<NewResponse>(`/top-headlines?category=business`)
    .pipe(
     map(({articles}) => articles)
     );*/
    }
   

  getTopHeadLinesByCategory(category:string, loadMore:boolean = false):Observable<Article[]>{

    return of(this.articleBYCategoryAndPage[category].articles);
    
    if(loadMore){
      return this.getArticlesByCategory(category);
    }

    if(this.articleBYCategoryAndPage[category]){
      //el of convierte en un observable lo que que sea que le mandes como argumento 
      return of(this.articleBYCategoryAndPage[category].articles);
    }

    /*return this.executeQuery<NewResponse>(`/top-headlines?category=${category}`)
      .pipe(
          map(({articles}) => articles)
      );*/

    return this.getArticlesByCategory(category)  
  }

  private getArticlesByCategory(category: string):Observable<Article[]>{
    
    if(Object.keys( this.articleBYCategoryAndPage).includes(category)){
      //ya existe
     // this.articleBYCategoryAndPage[category].page += 1;  
    }else {
      this.articleBYCategoryAndPage[category]={
        page:0,
        articles:[]
      }
    }
    const page = this.articleBYCategoryAndPage[category].page +1;
    return this.executeQuery<NewResponse>(`/top-headlines?category=${category}&page=${page}`)
      .pipe(
        map(({articles})=> {

          if(articles.length === 0) return this.articleBYCategoryAndPage[category].articles;;

          this.articleBYCategoryAndPage[category]={
            page: page,
            articles: [...this.articleBYCategoryAndPage[category].articles, ...articles]
          }
          return this.articleBYCategoryAndPage[category].articles;
        })
      )
  }
  
}
