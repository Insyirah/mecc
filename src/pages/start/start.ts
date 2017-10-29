import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';
import {SignInPage} from '../sign-in/sign-in';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  goRegister(){
    this.navCtrl.push(RegisterPage)
  }

  goSignIn(){
    let myModal = this.modalCtrl.create(SignInPage,{
      planCase: "userName"
    });
    myModal.present();
    // this.navCtrl.setRoot(SignInPage)
  }

}
