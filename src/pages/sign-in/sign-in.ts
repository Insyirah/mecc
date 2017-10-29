import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
passwordForm : boolean = false;
usernameForm : boolean = false;
planCase : any;

constructor(public navCtrl : NavController, public navParams : NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
    this.planCase = this.navParams.get("planCase");

    
    switch (this.planCase){
      case "userName":
      this.usernameForm = true;
      break

      case "pw":
      this.passwordForm = true;
      break
    }
  }

  goPassword(){
    let myModal = this.modalCtrl.create(SignInPage,{
      planCase: "pw"
    });
    myModal.present();
  }

  goSignIn(){
    this.navCtrl.setRoot(TabsPage)
  }

}
