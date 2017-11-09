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
        disable: true
      })
    }
  }

  pickedDate(x) {
    console.log(x);
  }

  // disableMonth(){
    //   //check if current month is being shown
    //   if (this.calendar.getFullYear() == this.calendar.getFullYear() && this.calendar.getMonth()){
    //     //if current month is shown, disable only past days
    //     for (let i = Date() ; i < this.calendar.getDate(); i++){
    //       this.calendarDefault.disable.push(i)
    //     }
    //   }
    //   else if (this.calendar.getMonth() + 2 > this.calendar.getMonth()){
    //     for (let i = 1; i < 31; i++){
    //       this.calendarDefault.disable.push(i)
    //     }
    //   }
    // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SetDayAppointmentPage');
  // }

  setTime() {
    this.navCtrl.push(SetTimeAppointmentPage)
  }

}

