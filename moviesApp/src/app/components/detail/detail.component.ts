import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;
  movieDetail: MovieDetail = {};
  actors: Cast[] = [];
  oculto= 150;
  star = 'star-outline'

  slideOptActors = {
    slidesPerView: 3.3,
    freeMOde: true,
    spacebetween: -5
  }

  constructor(private moviesService: MoviesService, private modalController: ModalController, private dataLocal: DataLocalService) { }

  ngOnInit() {
    //console.log('ID', this.id)
    this.dataLocal.existMovie(this.id).then(exist=>{
      this.star = (exist) ? 'star' : 'star-outline'
    });

    this.moviesService.getDeatilMovie(this.id).subscribe(res=>{
      this.movieDetail = res;
    });

    this.moviesService.getActor(this.id).subscribe(res=>{
      this.actors = res.cast;
    })
  }

  goBack(){
    this.modalController.dismiss();
  }

  favorite(){
    const exist = this.dataLocal.saveMovie(this.movieDetail);
    this.star = (exist) ? 'star' : 'star-outline'
  }

}
