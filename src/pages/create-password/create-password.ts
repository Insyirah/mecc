import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfirmationCodePage} from '../confirmation-code/confirmation-code';

/**
 * Generated class for the CreatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-password',
  templateUrl: 'create-password.html',
})
export class CreatePasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePasswordPage');
  }

  goConfirmationCode(){
    this.navCtrl.push(ConfirmationCodePage)
  }

}
