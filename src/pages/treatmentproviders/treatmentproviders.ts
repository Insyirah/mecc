import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {SetDayAppointmentPage} from '../set-day-appointment/set-day-appointment';

@IonicPage()
@Component({selector: 'page-treatmentproviders', templateUrl: 'treatmentproviders.html'})
export class TreatmentprovidersPage {
test3 : any;
o : Array < any > = []
test2 : any;

@ViewChild('mySlider')slider : Slides;
  selectedSegment : string;
  slides : any;
  treatments : any[]
  test : any[]

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      }, { //benda boleh tulis kat sini kan haha
        id: "second",
        title: "Second Slide"
      }, {
        id: "third",
        title: "Third Slide"
      }
    ];

    this.test3=[{name:'1'}]

    //panggil data this treatment
    this.treatments = [
      {
        name: 'Treatment 1',
        hours: "30min",
        price: "Rp 50K"
      }, {
        name: 'Treatment 2',
        hours: "35min",
        price: "Rp 30K"
      }, {
        name: 'Treatment 3',
        hours: "40min",
        price: "Rp 40K"
      }, {
        name: 'Treatment 4',
        hours: "37min",
        price: "Rp 60K"
      }
    ];

    this.createStatus(this.treatments.length)
  }

  createStatus(x) {
    for (let i = 0; i < x.length; i++) {
      let p = {
        index: i,
        status: false
      }
      this.o.push(p)
    }
  }

  picked(x,y) {
    this.test ==this.test3.filter(y => {//check ada x dlm array or dia dah plih ke x
        y.name == x
      })

      // this.test3.push(x)

      

    if (this.test ==[{}]) {
      // this.o[y].status = true
      this.test3.push(x)// first time pilih
      console.log("test",this.test)
    } else {
      // this.o[y].status = false
      this.test3.pop(x)// x nak plih dah
      console.log("tests",this.test)
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentprovidersPage');
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this
      .slides
      .findIndex((slide) => {
        return slide.id === segmentButton.value;
      });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

  bookAppointment() {
    this
      .navCtrl
      .push(SetDayAppointmentPage)
  }

}
