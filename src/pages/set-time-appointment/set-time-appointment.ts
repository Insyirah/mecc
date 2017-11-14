import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetDayAppointmentPage } from '../set-day-appointment/set-day-appointment';
import { ConfirmBookingPage } from '../confirm-booking/confirm-booking';
import { ServiceApiProvider } from '../../providers/service-api/service-api';
import { LocalStorageService } from 'ng2-webstorage';

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
  fomss: { applicationID: any; };
  forms: { applicationID: any; agentSlotID: any; applicationBookingDate: any; };
  slots: any = {}
  choose: any;
  slot: any;
  branchId: any;
  discountId: any;
  applicationId: any;
  timeSlot: any;
  form: { applicationID: any; agentDiscountID: any; agentBranchID: any; applicationSlotDate: any; };
  dates: any;
  bookDate: any;
  times: any[]
  constructor(private storage: LocalStorageService, private serviceApi: ServiceApiProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.bookDate = this.navParams.get("date")
    console.log("bookDate", this.bookDate)
    this.getTimeSlot()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetTimeAppointmentPage');
  }

  getTimeSlot() {
    // console.log("slotId",slotId)
    this.applicationId = this.navParams.get('applicationID')
    this.discountId = this.navParams.get('agentDiscountID')
    this.branchId = this.navParams.get('agentBranchID')
    this.dates = this.navParams.get('date')

    console.log("AppIDT", this.applicationId)
    console.log("DiscIDT", this.discountId)
    console.log("BrancIDT", this.branchId)
    console.log("Dates", this.dates)

    this.form = {
      applicationID: this.applicationId,
      agentDiscountID: this.discountId,
      agentBranchID: this.branchId,
      applicationSlotDate: this.dates
    }
    console.log("form", this.form)
    this.serviceApi.getBookingSlot(this.form).subscribe(data => {
      this.timeSlot = data.availableSlot
      //  this.storage.store("timeSlot",this.timeSlot)
      console.log(this.timeSlot)
    })
  }


  chooseSlot(choosenTime) {
    console.log(choosenTime)
    this.slot = choosenTime
    // this.choose = this.storage.retrieve("timeSlot")
  }

  async setBooking (){
    this.forms = {
      applicationID: this.applicationId,
      agentSlotID:this.slot,
      applicationBookingDate:this.dates
    }
    console.log(this.form)
  await this.serviceApi.postBookingSlot(this.forms).subscribe(data => {
     console.log(data)
    })
    this.fomss = {
      applicationID: this.applicationId,
    }
  await this.serviceApi.postSummaryBooking(this.fomss).subscribe(data => {
      console.log(data)
     })


  await this.serviceApi.getSummaryBooking(this.fomss).subscribe(data => {
      console.log(data)
     })
     this.navCtrl.push(ConfirmBookingPage,{
     })
  }

}
