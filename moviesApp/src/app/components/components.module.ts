import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesShowPosterComponent } from './slides-show-poster/slides-show-poster.component';
import { SlidesShowPairsComponent } from './slides-show-pairs/slides-show-pairs.component';
import { DetailComponent } from './detail/detail.component';




@NgModule({
  //entryComponents se puede crear dinamicamente con angular
  entryComponents:[
    DetailComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlidesShowPosterComponent,
    SlidesShowPairsComponent,
    DetailComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlidesShowPosterComponent,
    SlidesShowPairsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
