import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {SetTimeAppointmentPage} from '../set-time-appointment/set-time-appointment';

@IonicPage()
@Component({
  selector: 'page-treatmentproviders',
  templateUrl: 'treatmentproviders.html',
})
export class TreatmentprovidersPage {

  @ViewChild('mySlider')slider : Slides;
  selectedSegment: string;
  slides: any;
  treatments:any[]
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
      },
      {
        id: "third",
        title: "Third Slide"
      }
    ];

    this.treatments = [
      {name:'Treatment 1',hours:"30min",price:"Rp 50K"},
      {name:'Treatment 2',hours:"35min",price:"Rp 30K"},
      {name:'Treatment 3',hours:"40min",price:"Rp 40K"},
      {name:'Treatment 4',hours:"37min",price:"Rp 60K"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentprovidersPage');
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

  bookAppointment(){
    this.navCtrl.push(SetTimeAppointmentPage)
  }

}
