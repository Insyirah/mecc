import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListprovidersPage } from './listproviders';

@NgModule({
  declarations: [
    ListprovidersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListprovidersPage),
  ],
})
export class ListprovidersPageModule {}
