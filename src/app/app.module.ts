import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListprovidersPage } from '../pages/listproviders/listproviders'
import { TreatmentprovidersPage } from '../pages/treatmentproviders/treatmentproviders'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SetTimeAppointmentPage} from '../pages/set-time-appointment/set-time-appointment';
import {SetDayAppointmentPage} from '../pages/set-day-appointment/set-day-appointment';
import {ListprovidersPageModule} from '../pages/listproviders/listproviders.module';
import {TreatmentprovidersPageModule} from '../pages/treatmentproviders/treatmentproviders.module';
import {SetTimeAppointmentPageModule} from '../pages/set-time-appointment/set-time-appointment.module';
import {SetDayAppointmentPageModule} from '../pages/set-day-appointment/set-day-appointment.module';
import {ConfirmBookingPageModule} from '../pages/confirm-booking/confirm-booking.module';

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
    
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
