import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from "@angular/forms/";

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
  constructor(private view: ViewController, private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.logInForm = this.fb.group({
      name: [''],
      password: ['', Validators.required]
    });
  }

  //  dismiss() {
  //    // Returning data from the modal:
  //    

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
      planCase: "pw"
    });
    myModal.present();

  }

  goSignIn(form) {
    form.name = this.navParams.get("name");
    this.FinalForm = this.SubmitLogIn(form)
    console.log(this.FinalForm)

    this.navCtrl.setRoot(TabsPage)
  }



  SubmitLogIn(form) {
    this.emails = this.emailFilter(form.name)
    console.log(this.emails)
    if (this.emails == true) {
      this.submitForm = {
        email: form.name,
        phoneNumber: "",
        userName: "",
        password: form.password,
        type: 1
      }
      console.log(this.submitForm)
      //  this.goLogInMeccapan(this.submitForm)
    }
    else {
      this.ph = this.phFilter(form.name)

      if (this.ph == true) {
        this.submitForm = {
          email: "",
          phoneNumber: form.name,
          userName: "",
          password: form.password,
          type: 1
        }

        console.log(this.submitForm)
        // this.goLogInMeccapan(this.submitForm)
      }

      else {
        this.submitForm = {
          email: "",
          phoneNumber: "",
          userName: form.name,
          password: form.password,
          type: 1
        }
        console.log(this.submitForm)
        //   this.goLogInMeccapan(this.submitForm)
      }
    }
return this.submitForm

  }




  emailFilter(x): boolean {
    if (x.indexOf("@") == -1) {
      return false
    }
    else {
      var res = x.slice(x.indexOf("@") + 1);

      if (res.indexOf("@") == -1 && res.indexOf(".") != -1) {
        return true
      }
      else {
        return false
      }
    }
  }

  phFilter(x): boolean {
    this.no = parseInt(x)
    if (this.no.toString().length == x.length) {
      return true
    }
    else {
      return false
    }
  }

}
