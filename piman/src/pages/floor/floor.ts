import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from '../room/room';

/**
 * Generated class for the FloorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FloorPage');
  }

  room(){
    this.navCtrl.push(RoomPage);
  }

}
