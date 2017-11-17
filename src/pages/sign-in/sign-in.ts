import { Component } from '@angular/core';
<<<<<<< HEAD
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';
=======
import { IonicPage, NavController, NavParams, ModalController, ViewController, Events } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from "@angular/forms/";
import { ServiceApiProvider } from '../../providers/service-api/service-api';
import { LocalStorageService } from 'ng2-webstorage';
>>>>>>> 2acd6139039b03f9632a251fa2f6914f686e90a6

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
<<<<<<< HEAD
passwordForm : boolean = false;
usernameForm : boolean = false;
planCase : any;

constructor(public navCtrl : NavController, public navParams : NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
    this.planCase = this.navParams.get("planCase");

    
    switch (this.planCase){
      case "userName":
      this.usernameForm = true;
      break

      case "pw":
      this.passwordForm = true;
      break
    }
  }

  goPassword(){
    let myModal = this.modalCtrl.create(SignInPage,{
=======
  form: { username: any; password: any; loginType: string; userType: string; };
  FinalForm: any;
  user: any;
  no: number;
  passwordForm: boolean = false;
  usernameForm: boolean = false;
  planCase: any;
  logInForm: FormGroup;
  submitForm: { email: any; phoneNumber: string; userName: string; password: any; type: number; };
  ph: boolean;
  emails: boolean;
  constructor(public events: Events,private storage: LocalStorageService,private serviceApi : ServiceApiProvider,private view: ViewController, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.logInForm = this.fb.group({
      name: [''],
      password: ['', Validators.required]
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
    this.planCase = this.navParams.get("planCase");
    switch (this.planCase) {
      case "userName":
        this.usernameForm = true;
        break
      case "pw":
        this.passwordForm = true;
        break
    }
  }

  goPassword(x) {
    let myModal = this.modalCtrl.create(SignInPage, {
      name: x.name,
>>>>>>> 2acd6139039b03f9632a251fa2f6914f686e90a6
      planCase: "pw"
    });
    myModal.present();
  }

<<<<<<< HEAD
  goSignIn(){
    this.navCtrl.setRoot(TabsPage)
  }

=======
  goSignIn(form) {
    form.name = this.navParams.get("name");
    // this.FinalForm = this.SubmitLogIn(form)

    this.form={
      username : form.name,
      password : form.password,
      loginType :"Username",
      userType : "Customer"
    }
    console.log("form",this.form)
    
    this.serviceApi.postLoginMeccapan(this.form).subscribe(data => {
      if(data.status=="success"){
        alert("login success")
        // console.log("ini",data)
        console.log("itu",data)
        this.storage.store("user",data)
        this.events.publish('Login')
    
        this.navCtrl.setRoot(TabsPage)
      }else if(data.status=="error"){
        console.log(data)
        alert("your detail might be wrong")
      }else{
        alert("error")
      }  
     })
  }



//   SubmitLogIn(form) {
//     this.emails = this.emailFilter(form.name)
//     console.log(this.emails)
//     if (this.emails == true) {
//       this.submitForm = {
//         email: form.name,
//         phoneNumber: "",
//         userName: "",
//         password: form.password,
//         type: 1
//       }
//       console.log(this.submitForm)
//       //  this.goLogInMeccapan(this.submitForm)
//     }
//     else {
//       this.ph = this.phFilter(form.name)
//       if (this.ph == true) {
//         this.submitForm = {
//           email: "",
//           phoneNumber: form.name,
//           userName: "",
//           password: form.password,
//           type: 1
//         }
//         console.log(this.submitForm)
//         // this.goLogInMeccapan(this.submitForm)
//       }

//       else {
//         this.submitForm = {
//           email: "",
//           phoneNumber: "",
//           userName: form.name,
//           password: form.password,
//           type: 1
//         }
//         console.log(this.submitForm)
//         //   this.goLogInMeccapan(this.submitForm)
//       }
//     }
// return this.submitForm
//   }




  // emailFilter(x): boolean {
  //   if (x.indexOf("@") == -1) {
  //     return false
  //   }
  //   else {
  //     var res = x.slice(x.indexOf("@") + 1);

  //     if (res.indexOf("@") == -1 && res.indexOf(".") != -1) {
  //       return true
  //     }
  //     else {
  //       return false
  //     }
  //   }
  // }

  // phFilter(x): boolean {
  //   this.no = parseInt(x)
  //   if (this.no.toString().length == x.length) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

>>>>>>> 2acd6139039b03f9632a251fa2f6914f686e90a6
}
