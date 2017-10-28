import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('mySlider')slider : Slides;
  selectedSegment: string;
  slides: any;
  providerr:any;
  completed:any;

  constructor(public navCtrl: NavController) {
    
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

    this.providerr = [
      {name:'Johny Saloons',treatment:"Eyelashes, Haircut",date:"Wednesday, March 20, 2PM"},
      {name:'Johny Saloons',treatment:"Rebonding",date:"date"},
      {name:'Johny Saloons',treatment:"Rebonding",date:"date"},
      {name:'Johny Saloons',treatment:"Rebonding",date:"date"},
      {name:'Johny Saloons',treatment:"Rebonding",date:"date"},
      {name:'Johny Saloons',treatment:"Rebonding",date:"date"},
    ];

    this.completed = [
      {name:'Johny Saloons',treatment:"Eyelashes, Haircut",date:"Wednesday, March 20, 2PM"},
    ];

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

}
