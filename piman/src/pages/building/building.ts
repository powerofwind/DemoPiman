import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FloorPage } from '../floor/floor';

/**
 * Generated class for the BuildingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building',
  templateUrl: 'building.html',
})
export class BuildingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingPage');
  }

  floor1(){
    this.navCtrl.push(FloorPage);
  }
}
