import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairsPipe } from './pairs.pipe';
import { FilterImagePipe } from './filter-image.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    PairsPipe,
    FilterImagePipe
  ],
  exports:[
    ImagePipe,
    PairsPipe,
    FilterImagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
