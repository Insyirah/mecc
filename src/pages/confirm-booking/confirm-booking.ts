import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

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
  form: { applicationID: any; };
  applicationId: any;
bookings : any[]
constructor(private serviceApi: ServiceApiProvider,public navCtrl : NavController, public navParams : NavParams) {

    
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

 getBookingSummary(){


  
  }

}
