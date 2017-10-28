import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { ListprovidersPage } from '../listproviders/listproviders';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  avatars : any[];
  ava:any[];
  calendar:Date = new Date()
  markDisabled:any
constructor(public navCtrl : NavController) {

this.avatars = [
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
];

this.markDisabled = (date: Date) => {
  var current = new Date();
  return date < current;
};}

test(){
  this.navCtrl.push(ListprovidersPage)
}

}
