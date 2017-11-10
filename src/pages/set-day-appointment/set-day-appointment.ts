import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetTimeAppointmentPage } from '../set-time-appointment/set-time-appointment';
import { CalendarComponentOptions, DayConfig } from "ion2-calendar/dist";

@IonicPage()
@Component({
  selector: 'page-set-day-appointment',
  templateUrl: 'set-day-appointment.html',
})
export class SetDayAppointmentPage {
  selectedDate: any;
  disableDay: Array<number> = []
  calendar: Date = new Date()
  date: string;
  calenderDefault: any = {
    todayDate: new Date(),//ngmodel
    dateOutputType: 'string',
    dateOutputFormat: 'YYYY-DD-MM'
  }
  daysDisable: DayConfig[] = [];
  CalendarOptions: CalendarComponentOptions = {
    daysConfig: this.daysDisable,
    showToggleButtons: true,
    disableWeeks: this.disableDay,
    showMonthPicker: false
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CalendarOptions.disableWeeks = [5, 6]

    this.DisableDate()
  }
  DisableDate() {
    //HTTP GET(DATE[ARRAY])
    let data = [{ date: "2017-11-13" }, { date: "2017-11-16" }, { date: "2017-11-18" }, { date: "2017-11-20" }, { date: "2017-11-22" }]

    for (let i = 0; i < data.length; i++) {
      this.daysDisable.push({
        date: new Date(data[i].date),
        subTitle: "FULL",
        disable: true,
        // marked:true
      })
    }
  }

  pickedDate(x) {
    this.selectedDate = x
    console.log("d",this.selectedDate)
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SetDayAppointmentPage');
  // }

  setTime(x) {
    this.navCtrl.push(SetTimeAppointmentPage,{
      date : this.selectedDate
    })
  }

}

