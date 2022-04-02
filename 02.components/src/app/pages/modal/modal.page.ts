import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async showModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Manuel',
        pais: 'Argentina'
      }
    });
    await modal.present();
    //SE muestra despues que se cierra el modal
    //const { data } = await modal.onDidDismiss();

    //Se muestra justo cuando comienza a desaparecer el modal
    const { data } = await modal.onWillDismiss();

    console.log(data);
  }

}
