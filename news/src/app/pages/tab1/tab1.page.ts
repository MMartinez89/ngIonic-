import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewResponse, Article } from '../../interfaces/index';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) ionInfiniteScroll: IonInfiniteScroll

  public articles: Article[] = []

  constructor(private newServices: NewsService) {}

  ngOnInit(): void {
    this.newServices.getTopHeadlines().subscribe(articles =>{
     /* for(let i in articles){
        this.articles.push(articles[i])
      }*/
      this.articles.push(...articles)
    })
    }

    loadData(){
      this.newServices.getTopHeadLinesByCategory('business', true).subscribe(
        articles=>{
          if(articles.length === this.articles.length){
            this.ionInfiniteScroll.disabled = true
            //event.target.disabled = true;
            return;
          }
          this.articles = articles;
          this.ionInfiniteScroll.complete()
          //event.target.complete();
        }
      );
    }


}
