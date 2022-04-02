import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    //console.log(event);

    setTimeout(() => {
      const newData: any[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
      /*for(let i in newData){
        this.data.push(i)
      }*/

      if(this.data.length > 50){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      this.data.push(...newData)
     // event.target.complete();
     this.infiniteScroll.complete();
    }, 1500);
  }

}
