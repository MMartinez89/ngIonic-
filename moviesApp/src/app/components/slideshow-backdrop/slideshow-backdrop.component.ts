import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})


export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movie[] =[];


  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  async viewMovie( id:string ){
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps:{
        id: id
      }
    });

    modal.present();
  }

}
