import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable <any>;
  @ViewChild(IonList) ionList:IonList;

  constructor( private dataService:DataService ) { }

  ngOnInit() {
    this.usuarios = this.dataService.gerUsuarios();
  }

  favorite(user:any){
    console.log('favorite',user);
    this.ionList.closeSlidingItems();

  }
  share(user:any){
    this.ionList.closeSlidingItems();
    console.log('share',user);
  }

  delete(user:any){
    this.ionList.closeSlidingItems()
    console.log('delete', user.name)

  }

}
