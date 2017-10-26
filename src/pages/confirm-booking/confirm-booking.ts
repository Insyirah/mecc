import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-booking',
  templateUrl: 'confirm-booking.html',
})
export class ConfirmBookingPage {
bookings : any[]
constructor(public navCtrl : NavController, public navParams : NavParams) {

    
    this.bookings = [
      {
        provider: 'Johnny Saloon',
        date: "Wednesday,20 March",
        period:"30min",
        treatment: "Hair Stylist",
        price:"Rp. 100k"
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmBookingPage');
  }

}
