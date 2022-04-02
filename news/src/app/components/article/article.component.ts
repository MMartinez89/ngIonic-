import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import { Article } from '../../interfaces';
import { Platform, ActionSheetController, ActionSheetButton } from '@ionic/angular';
import { StorageService } from '../../servives/storage-service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() index: number;

  constructor(private iab: InAppBrowser, private platform: Platform, private actionSheetController:ActionSheetController, private socialSharing: SocialSharing, private storageService: StorageService) { }

  ngOnInit() {}

  openArticle(url){

    if( this.platform.is('ios') || this.platform.is('android')){
      //console.log(url)
      const browser = this.iab.create(url);
      browser.show();
    }
    
    window.open(url, '_blanck');

  }

   async openMenu(){

    const articleFavorites = this.storageService.articleInFavotites(this.article);

    const normalBtn: ActionSheetButton[] = [
      {
        text: articleFavorites ? 'Remove Favorito' : 'Favorito',
        icon: articleFavorites ? 'heart' : 'heart-outline',
        handler: ()=> this.onTooggleFavorite()
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel'
      }
    ]

    const sharebtn: ActionSheetButton =  {
      text: 'Compartir',
      icon: 'share-outline',
      handler: ()=> this.onShareArticle()
    }

    //if(this.platform.is('capacitor')){
      normalBtn.unshift(sharebtn);
    //}


    const actionSheetController = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: normalBtn
    });

 
    await actionSheetController.present()
  }

  onShareArticle(){

    this.shareNew();

    /*this.socialSharing.share(
      this.article.title,
      this.article.source.name,
      null,
      this.article.url
    ) */
  }

  onTooggleFavorite(){
    this.storageService.saveRemoveArticle(this.article)
  }

  shareNew(){

    if(this.platform.is('capacitor')){
      this.socialSharing.share(
        this.article.title,
        this.article.source.name,
        null,
        this.article.url
      ) 
    }else{
      if (navigator.share) {
        navigator.share({
          title: this.article.title,
          text: this.article.description,
          url: this.article.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }else{
        console.log('NO se puede compartir no se soporta')
      }
    }
 
  }
}
