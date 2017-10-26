import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StartPage} from '../start/start';

/**
 * Generated class for the ConfirmationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-code',
  templateUrl: 'confirmation-code.html',
})
export class ConfirmationCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationCodePage');
  }

  done(){
    this.navCtrl.push(StartPage)
  }

}
