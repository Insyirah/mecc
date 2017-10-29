import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, AlertController} from 'ionic-angular';
import {TreatmentprovidersPage} from '../treatmentproviders/treatmentproviders';

@IonicPage()
@Component({
  selector: 'page-listproviders',
  templateUrl: 'listproviders.html',
})
export class ListprovidersPage {
  providers:any[];

@ViewChild('mySlider')slider : Slides;
  selectedSegment: string;
  slides: any;
  marker: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      },
      {
        id: "second",
        title: "Second Slide"
      }
    ];

    this.providers = [
      {name:'Johny Saloons',address:"Jalan Permata,Bandung"},
      {name:'Maria Saloons',address:"Taman Melawati,Melawi"},
      {name:'Merry Saloons',address:"Bandar Tun Hussein,Selangor"},
      {name:'John Saloons',address:"Jalan Cerah,Perak"},
      {name:'Lo & Saloons',address:"Bandung"},
      {name:'Johny Saloons',address:"Bandar Lama,Melawati"},
    ];

    this.marker = [3.135111,101.684282];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListprovidersPage');
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
   const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

  goTreatment(){
    this.navCtrl.push(TreatmentprovidersPage)
  }

  filterType(){
    console.log("c")
    let alert = this.alertCtrl.create({
      title: 'Please select:',
      inputs: [
        {
          type: 'radio',
          label: 'Rating',
          value: 'onlinePayment',
          checked: true
        },
        {
          type: 'radio',
          label: 'Price low to high',
          value: 'actCode'
        },
        {
          type: 'radio',
          label: 'Price high to low',
          value: 'actCode'
        },
        {
          type: 'radio',
          label: 'Discount',
          value: 'actCode'
        }
      ],
      buttons: [
      
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Ok",
          handler: data => {
            console.log("OK clicked");
            console.log("val", data);
          }
        }
      ]
    });
    alert.present()
  }
}
