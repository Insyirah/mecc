import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      {name:'Johny Saloons',address:"Bandung"},
      {name:'Johny Saloons',address:"Bandung"},
      {name:'Johny Saloons',address:"Bandung"},
      {name:'Johny Saloons',address:"Bandung"},
      {name:'Johny Saloons',address:"Bandung"},
      {name:'Johny Saloons',address:"Bandung"},
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
}
