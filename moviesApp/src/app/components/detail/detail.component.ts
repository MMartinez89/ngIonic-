import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

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

  slideOptActors = {
    slidesPerView: 3.3,
    freeMOde: true,
    spacebetween: -5
  }

  constructor(private moviesService: MoviesService, private modalController: ModalController) { }

  ngOnInit() {
    //console.log('ID', this.id)
    this.moviesService.getDeatilMovie(this.id).subscribe(res=>{
      console.log(res);
      this.movieDetail = res;
    });

    this.moviesService.getActor(this.id).subscribe(res=>{
      console.log('Credits',res);
      this.actors = res.cast;
    })
  }

  goBack(){
    this.modalController.dismiss();
  }

}
