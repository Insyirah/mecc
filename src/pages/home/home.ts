import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ListprovidersPage } from '../listproviders/listproviders';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bodyTreatment: Array<any>;
  hairTreatment: Array<any>;
  faceTreatment:  Array<any>;
  providerId: any;
  form: {};
  treatmentProvidedDetailID: number;
  avatars: any[];
  ava: any[];

  constructor(private serviceApi: ServiceApiProvider, public navCtrl: NavController) {
   
    // this.avatars = [
    //   { category: '1', img: "assets/dino.jpg" },
    //   { category: '1', img: "assets/dino.jpg" },
    //   { category: '1', img: "assets/dino.jpg" },
    //   { category: '1', img: "assets/dino.jpg" },
    //   { category: '1', img: "assets/dino.jpg" },
    //   { category: '1', img: "assets/dino.jpg" },
    // ];

  }

  ionViewDidLoad() {
    this.getFaceTreatment()
    this.getHairTreatment()
    this.getBodyTreatment()
  }

  getFaceTreatment() {
    this.form = {
      moduleName: "UserApplication",
      masterName: "List Of Face Treatment"
    }
    this.serviceApi.getFaceTreatment(this.form).subscribe(data => {
      this.faceTreatment = data.masterData
      console.log("faceTreatment", this.faceTreatment)
    })
  }

  getHairTreatment() {
    this.form = {
      moduleName: "UserApplication",
      masterName: "List Of Hair Treatment"
    }
    this.serviceApi.getHairTreatment(this.form).subscribe(data => {
      this.hairTreatment = data.masterData
      console.log("hairTreatment", this.hairTreatment)
    })
  }

  // goHairTreatmentProvider(MasterDataMaintenanceItemID) {
  //   this.navCtrl.push(ListprovidersPage, {
  //     treatmentHairId: MasterDataMaintenanceItemID
  //   })
  // }

  goTreatmentProvider(MasterDataMaintenanceItemID) {
    this.navCtrl.push(ListprovidersPage, {
      treatmentId: MasterDataMaintenanceItemID
    })
  }

  getBodyTreatment() {
    this.form = {
      moduleName: "UserApplication",
      masterName: "List Of Body Treatment"
    }
    this.serviceApi.getBodyTreatment(this.form).subscribe(data => {
      this.bodyTreatment = data.masterData
      console.log("bodyTreatment", this.bodyTreatment)
    })
  }


  test() {
    this.providerId = 9
    this.navCtrl.push(ListprovidersPage, {
      providerID: this.providerId
    });
  }

}

