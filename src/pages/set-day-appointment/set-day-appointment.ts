import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SetTimeAppointmentPage} from '../set-time-appointment/set-time-appointment';

@IonicPage()
@Component({
  selector: 'page-set-day-appointment',
  templateUrl: 'set-day-appointment.html',
})
export class SetDayAppointmentPage {

  calendar:Date = new Date()
  markDisabled:any
  // calendar: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.calendar = new Date()
    this.markDisabled = (date: Date) => {
      var current = new Date();
      return date < current;
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetDayAppointmentPage');
  }

  setTime(){
    this.navCtrl.push(SetTimeAppointmentPage)
  }

}

