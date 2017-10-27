import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SetDayAppointmentPage} from '../set-day-appointment/set-day-appointment';
import {ConfirmBookingPage} from '../confirm-booking/confirm-booking';

/**
 * Generated class for the SetTimeAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-time-appointment',
  templateUrl: 'set-time-appointment.html',
})
export class SetTimeAppointmentPage {
times : any []
constructor(public navCtrl : NavController, public navParams : NavParams) {

    this.times = [
      {
        date: 'Wednesday,20 March',
        time: "2pm",
        period: "30 mins"
      },
      {
        date: 'Wednesday,20 March',
        time: "3:30pm",
        period: "35 mins"
      },
      {
        date: 'Wednesday,20 March',
        time: "3:30pm",
        period: "35 mins"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetTimeAppointmentPage');
  }

  setTime(){
    this.navCtrl.push(ConfirmBookingPage)
  }

}
