import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
bookings : any;
constructor( private alertCtrl: AlertController,private serviceApi: ServiceApiProvider,public navCtrl : NavController, public navParams : NavParams) {

    
    // this.bookings = [
    //   {
    //     provider: 'Johnny Saloon',
    //     date: "Wednesday,20 March",
    //     period:"30min",
    //     treatment: "Hair Stylist",
    //     price:"Rp. 100k"
    //   },
    // ];
  }

 async ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmBookingPage');
   await this.getBookingSummary()
  }
  private presentAlert(text) {
    let alert = this.alertCtrl.create({
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
 getBookingSummary(){
  this.bookings = this.navParams.get("detailBooking")
  this.applicationId = this.navParams.get("applicationID")
  console.log("b",this.bookings)  
  }

  goBooking(){
    this.form = {
      applicationID:this.applicationId
    }
    console.log(this.form)
    this.serviceApi.postSubmitBooking(this.form).subscribe(data => {
      console.log(data)
      if(data.status == "success"){
        this.presentAlert('You have successfully booking.');
      }else{
        this.presentAlert('Service error');
      }
    })
  }
  // this.presentAlert('The email is already in used. Please try another email.');
}
