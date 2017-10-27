import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ConfirmBookingPageModule} from '../pages/confirm-booking/confirm-booking.module';

//import { NguiMapModule } from '@ngui/map';
import {RegisterPageModule} from '../pages/register/register.module';
import {StartPageModule} from '../pages/start/start.module';
import {CreatePasswordPageModule} from '../pages/create-password/create-password.module';
import {ConfirmationCodePageModule} from '../pages/confirmation-code/confirmation-code.module';
import { SetTimeAppointmentPageModule } from "../pages/set-time-appointment/set-time-appointment.module";
import { TreatmentprovidersPageModule } from "../pages/treatmentproviders/treatmentproviders.module";
import { ListprovidersPageModule } from "../pages/listproviders/listproviders.module";
import { SetDayAppointmentPageModule } from "../pages/set-day-appointment/set-day-appointment.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    ListprovidersPageModule,
    TreatmentprovidersPageModule,
    SetTimeAppointmentPageModule,
    SetDayAppointmentPageModule,  
    ConfirmBookingPageModule,
    RegisterPageModule,     
    StartPageModule,
    CreatePasswordPageModule,
    ConfirmationCodePageModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAm08OG_hzyKatx20VRXGMh2Hd2eiKMbug' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    GooglePlus,
    Facebook,
    LoginService,
})
export class AppModule { }
