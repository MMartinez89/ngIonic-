import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Components } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  components: Observable<Components[]>;
  
  constructor(private dataService: DataService, private menu: MenuController) {
    this.initializeApp();
  }

  /*ngOnInit() {
    this.components = this.dataService.gerMenuOpts();
  }*/

  initializeApp(){
    this.components = this.dataService.gerMenuOpts();
  }

}
