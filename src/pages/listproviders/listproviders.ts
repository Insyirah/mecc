import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {TreatmentprovidersPage} from '../treatmentproviders/treatmentproviders';

/**
 * Generated class for the ListprovidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
