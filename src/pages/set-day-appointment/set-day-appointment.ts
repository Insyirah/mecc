import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetTimeAppointmentPage } from '../set-time-appointment/set-time-appointment';
import { CalendarComponentOptions, DayConfig } from "ion2-calendar/dist";
import moment from "moment"
@IonicPage()
@Component({
  selector: 'page-set-day-appointment',
  templateUrl: 'set-day-appointment.html',
})
export class SetDayAppointmentPage {
  harini: Date = new Date()
  previousMonths: boolean = false
  nextmonths: boolean = false
  data: any = []
  newmonth: Date;
  TarikhMax: Array<any> = []
  disableDay: Array<number> = []
  calendar: Date = new Date()
  date: string;
  calendarDefault: any = {
    todayDate: new Date(),//ngmodel
    dateOutputType: "string",
  }
  daysDisable: DayConfig[] = [];
  CalendarOptions: CalendarComponentOptions = {
    daysConfig: this.daysDisable,
    showToggleButtons: false,
    disableWeeks: this.disableDay,
    showMonthPicker: false
  };
  todayDate: Date = new Date()

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CalendarOptions.disableWeeks = [0, 6]
    this.DisableDate()
    //   this.disableMonth()
    //  console.log(moment())
  }


  nextMonth() {
    this.calendarDefault.todayDate = new Date(this.calendarDefault.todayDate.setMonth(this.calendarDefault.todayDate.getMonth() + 1))// utk pergi ke next month

    this.previousMonths = false
    let x = new Date()
    let LastDateCanBook = new Date(x.setDate(x.getDay() + 60))

    if (this.calendarDefault.todayDate.getMonth() == LastDateCanBook.getMonth()) {
      this.nextmonths = true
    }

  }

  previousMonth() {
    this.calendarDefault.todayDate = new Date(this.calendarDefault.todayDate.setMonth(this.calendarDefault.todayDate.getMonth() - 1))// utk pergi ke next month

    this.nextmonths = false
   // let LastDateCanBook = new Date(this.todayDate.setDate(this.todayDate.getDay() + 60))
   let x = new Date()
   
    if (this.calendarDefault.todayDate.getMonth() == x.getMonth()) {
      this.previousMonths = true
    }

  }

  pickedMonth() {
    alert()

  }
  DisableDate() {
    //HTTP GET(DATE[ARRAY])
    //date arini + 60 
    //10/1
    //
    //
    alert()
    let LastDateCanBook = new Date(this.todayDate.setDate(this.todayDate.getDay() + 60))
    console.log("LastDateCanBook" + LastDateCanBook)
    let o = this.todayDate.getMonth()
    let po = this.todayDate.getFullYear()
    let p = new Date(po, o + 1, 1)
    console.log(LastDateCanBook.getDate())
    let maxDayOfMonth = new Date(p.setDate(p.getDate() - 1))
    console.log("maxDayOfMonth" + maxDayOfMonth)
    let pol = new Date()
    for (let i = LastDateCanBook.getDate(); i <= maxDayOfMonth.getDate(); i++) {
      //console.log("hari bulan" + i)

      // console.log(pol.getMonth())
      //  console.log(new Date(pol.getFullYear(), pol.getMonth(), i))
      let pok = { date: new Date(LastDateCanBook.getFullYear(), LastDateCanBook.getMonth(), i).toDateString() }
      this.data.push(pok)
    }
    console.log(this.data)


    // this.data = [{ date: "2017-11-13" }, { date: "2017-11-16" }, { date: "2017-11-18" }, { date: "2017-11-20" }, { date: "2017-11-22" }]

    for (let i = 0; i < this.data.length; i++) {
      this.daysDisable.push({
        date: new Date(this.data[i].date),
        subTitle: "FULL",
        disable: true,
        marked: true
      })
    }
  }

  pickedDate(x) {
    console.log(x, " huhu");
  }

  // disableMonth() {
  //   // this.daysDisable = [];
  //   let today = new Date();
  //   console.log("full year", today.getFullYear())
  //   console.log("month", today.getMonth())
  //   //check if current month is being shown
  //   if (today.getMonth() == this.calendar.getMonth()) {
  //     //if current month is shown, disable only past days
  //     this.daysDisable.push()
  //   }
  //   else if (this.calendar.getMonth() + 2 > today.getMonth()) {
  //     for (let i = 1; i < 31; i++) {
  //       this.daysDisable.push()
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

