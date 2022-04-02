import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slides-show-pairs',
  templateUrl: './slides-show-pairs.component.html',
  styleUrls: ['./slides-show-pairs.component.scss'],
})
export class SlidesShowPairsComponent implements OnInit {


  @Input() movies: Movie[] = []
  @Input() id;
  @Output() cargarMas =  new EventEmitter();
  

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -20
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }

  async viewDetail(id:string){
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps:{
        id: id
      }
    });

    modal.present();
  }
  

}
