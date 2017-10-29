import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListprovidersPage } from './listproviders';
import {NguiMapModule} from '@ngui/map';

@NgModule({
  declarations: [
    ListprovidersPage,
  ],
  imports: [
    NguiMapModule,
    IonicPageModule.forChild(ListprovidersPage),
  ],
})
export class ListprovidersPageModule {}
