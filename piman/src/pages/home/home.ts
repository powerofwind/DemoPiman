import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuildingPage } from '../building/building';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  okbutton(){
    this.navCtrl.push(BuildingPage);
  }

}
