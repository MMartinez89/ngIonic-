import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items =  Array[40] = [1,1,1,1,1,1,1];

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(value: string){
    this.popoverController.dismiss({
      item: value
    });
  }

}
