import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slides-show-poster',
  templateUrl: './slides-show-poster.component.html',
  styleUrls: ['./slides-show-poster.component.scss'],
})
export class SlidesShowPosterComponent implements OnInit {

  @Input() movies: Movie[] = []
  @Input() id

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async viewMovie(id:string){
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps:{
        id: id
      }
    });

    modal.present();
  }

}
