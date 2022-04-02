import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) ionInfiniteScroll: IonInfiniteScroll //se pasa el segundo parametro static en true para cuando quieres 
                                                                                      //tomar el dato desde el ngOnInit, porque si solo se pasa el 
                                                                                      //primer parametro el viewChild en el NgOnInit sale en undefinded

  public categories:string[] = ['business','entertainment','general','health','science','sports','technology'];

  public selectedCategory: string = 'business';

  public articles:Article[] = [];

  constructor( private newService:NewsService) {}

  ngOnInit(): void {
    this.newService.getTopHeadLinesByCategory(this.selectedCategory).subscribe( article => {
      //console.log(article);
      this.articles = [ ...article];
    })
  }

  segmentChanged(event:any){
    this.selectedCategory = event.detail.value;
    this.newService.getTopHeadLinesByCategory(this.selectedCategory).subscribe( article => {
      this.articles = [...article];
    })
  }

  loadData(){
    this.newService.getTopHeadLinesByCategory(this.selectedCategory, true).subscribe(
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
