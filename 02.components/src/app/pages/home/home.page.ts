import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<Components[]>

  constructor(private menu: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.gerMenuOpts();
  }

  showMenu(){
    this.menu.open('first');
  }

}
