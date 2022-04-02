import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes:string[] = ['Manuel','Lorena','Sammy','Mina'];
  disability: boolean = true;
 
  constructor() { }

  ngOnInit() {
  }
  

  doReorder(event:any){
    console.log(event);

    const itemMove:string = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMove)

    event.detail.complete();

    console.log(this.personajes)
  }

  onClick(){
    this.disability = !this.disability;

  }

}
