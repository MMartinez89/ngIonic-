import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textSearch = "";
  movies: Movie[] = [];
  ideas:string[]=['Wolverine', 'Spiderman', 'Dios no esta muerto', 'Rocky', 'La vida es bella']
  render: boolean = false;

  constructor(private moviesSerice: MoviesService, private modalController: ModalController) {}

  search( e ){
    this.render = true;
   
    const value: string = e.detail.value
    if( value.length === 0 ){
      this.render = false;
      this.movies=[];
      return;
    }
    this.moviesSerice.serachMovie(value).subscribe(res=>{
      
        this.movies = res['results'];
        this.render= false
    });;
  }

  searchIdea(idea){
    this.textSearch = idea;
    
  }

  async showModal(id: string){
    const modal =  await this.modalController.create({
      component: DetailComponent,
      componentProps:{
        id: id
      }
    });
    modal.present();
    
  }
    
  

}
