import { Component } from '@angular/core';
import { StorageService } from '../../servives/storage-service';
import { Article } from '../../interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private _localArticle: Article[] = [];

 get articles():Article[]{
    return  this.storageService.getLocalArticle;
  }

  constructor(private storageService: StorageService) {
    
  }

}
