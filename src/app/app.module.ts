import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalendarModule } from "ion2-calendar";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfirmBookingPageModule } from '../pages/confirm-booking/confirm-booking.module';

import { NguiMapModule } from '@ngui/map';
import { RegisterPageModule } from '../pages/register/register.module';
import { StartPageModule } from '../pages/start/start.module';
import { CreatePasswordPageModule } from '../pages/create-password/create-password.module';
import { ConfirmationCodePageModule } from '../pages/confirmation-code/confirmation-code.module';
import { SetTimeAppointmentPageModule } from "../pages/set-time-appointment/set-time-appointment.module";
import { TreatmentprovidersPageModule } from "../pages/treatmentproviders/treatmentproviders.module";
import { ListprovidersPageModule } from "../pages/listproviders/listproviders.module";
import { SetDayAppointmentPageModule } from "../pages/set-day-appointment/set-day-appointment.module";
import { LoginService } from '../pages/service/login.service';
import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';

import { NgCalendarModule } from 'ionic2-calendar';
import { LogInMeccapanPage } from '../pages/log-in-meccapan/log-in-meccapan';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInMeccapanPage
  ],
  imports: [CalendarModule,
    NgCalendarModule,
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
    SignInPageModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBSy0GEQeCrUgJ9LvrYHUBemGUjHE1PhcU' }),
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LogInMeccapanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    LoginService,
  ]
})
export class AppModule { }
